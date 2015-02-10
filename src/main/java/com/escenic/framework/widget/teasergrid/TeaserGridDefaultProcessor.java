/*
 *$Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser-grid/src/main/java/com/escenic/framework/widget/teasergrid/TeaserGridDefaultProcessor.java#5 $
 *
 * Copyright (C) 2013 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */

package com.escenic.framework.widget.teasergrid;

import com.escenic.framework.controller.ContextAttr;
import com.escenic.framework.controller.processor.GenericWidgetProcessor;
import com.escenic.framework.utils.PresentationUtils;
import com.escenic.presentation.ThreadLocalPresentationLoader;

import neo.xredsys.api.Section;
import neo.xredsys.presentation.*;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author <a href="mailto:sms@vizrt.com">Sharif Mohammad Shahnewaz Ferdous</a>
 * @author last modified by $Author: nahian $
 * @version $Revision: #5 $ $Date: 2014/08/28 $
 */

public class TeaserGridDefaultProcessor extends GenericWidgetProcessor {
  private String mGroupName;

  @Override
  @SuppressWarnings("unchecked")
  protected void process(final Map<String, Object> pWidgetContext, final HttpServletRequest pRequest) {
    Map<String, Object> model = (Map<String, Object>) pWidgetContext.get("model");

    List<PresentationElement> groups = new ArrayList<>();

    List<Map<String, Object>> gridSourceDefinitions = (List<Map<String, Object>>) model.get("gridSources");
    if (CollectionUtils.isNotEmpty(gridSourceDefinitions)) {
      for (Map gridDefinition : gridSourceDefinitions) {
        Section section = resolveSection(gridDefinition, pRequest);

        PresentationPool pool = resolvePresentationPool(section, pRequest);
        int gridGroupIndex = Integer.parseInt((String) gridDefinition.get("gridGroupIndex"));

        PresentationElement group = PresentationUtils.findGroupByName(pool, getGroupName(), gridGroupIndex);

        if (group != null) {
          groups.add(group);
        } else {
          mLogger.warn(String.format("No %s group was found at index %d in the active section page of %s",
              getGroupName(),
              gridGroupIndex,
              section.getUniqueName()));
        }
      }
    }

    pWidgetContext.put("gridGroups", groups);

    if (CollectionUtils.isNotEmpty(groups)) {
      resolveViewRelations(pWidgetContext, model);
    }
  }

  private void resolveViewRelations(final Map<String, Object> pWidgetContext, final Map<String, Object> pModel) {
    PresentationArticle widgetContent = (PresentationArticle) pWidgetContext.get(ContextAttr.WIDGET_CONTENT);
    PresentationElement viewWidgetsRelations = widgetContent.getRelatedElements().get("viewRelation");
    if (viewWidgetsRelations != null && !viewWidgetsRelations.getItems().isEmpty()) {
      PresentationElement viewWidgetElement = viewWidgetsRelations.getItems().get(0);
      pModel.put(ContextAttr.VIEW_WIDGET, viewWidgetElement.getContent());
    }
  }

  private Section resolveSection(final Map<String, Object> pGridDefinition, final HttpServletRequest pRequest) {
    Object selectedSection = pGridDefinition.get("sectionselection") != null
        ? ((PresentationCollectionValue) pGridDefinition.get("sectionselection")).getValue()
        : null;

    Section section;
    if (selectedSection instanceof Section) {
      section = (Section) selectedSection;
    } else {
      section = (Section) pRequest.getAttribute("section");
    }

    return section;
  }

  private PresentationPool resolvePresentationPool(final Section pSection, final HttpServletRequest pRequest) {
    PresentationPool pool;

    String previewPoolID = pRequest.getParameter("poolId");
    if (StringUtils.isNotEmpty(previewPoolID)) {
      pool = (PresentationPool) pRequest.getAttribute("pool");
      if (pSection != pool.getSection()) {
        pool = getPresentationLoader().getActivePool(pSection.getId());
      }
    } else {
      pool = getPresentationLoader().getPool(pSection);
    }

    return pool;
  }

  PresentationLoader getPresentationLoader() {
    return ThreadLocalPresentationLoader.getPresentationLoader();
  }

  public String getGroupName() {
    return mGroupName;
  }

  public void setGroupName(String pGroupName) {
    mGroupName = pGroupName;
  }
}