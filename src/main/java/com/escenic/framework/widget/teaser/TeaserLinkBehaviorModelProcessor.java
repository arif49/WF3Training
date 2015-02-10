/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/java/com/escenic/framework/widget/teaser/TeaserLinkBehaviorModelProcessor.java#1 $
 *
 * Copyright (C) 2014 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.teaser;

import com.escenic.framework.controller.processor.GenericModelProcessor;

import neo.xredsys.presentation.PresentationArticle;
import neo.xredsys.presentation.PresentationCollectionValue;

import org.apache.commons.lang.StringUtils;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * @author <a href="mailto:khaer@escenic.com">Mohammad Abul Khaer</a>
 * @author last modified by khaer
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class TeaserLinkBehaviorModelProcessor extends GenericModelProcessor {

  static final String FIELD_NAME_LINK_SETTINGS = "linkbehavior";
  private Map<String, String> mLinkBehaviors = new HashMap<>();

  @Override
  protected void updateModel(final Map<String, Object> pWidgetModel, final PresentationArticle pWidgetContent) {
    String inlineDevices = getInlineDevices(pWidgetModel);
    pWidgetModel.put("inlineDevices", inlineDevices);
    pWidgetModel.put("linkSettings", getLinkSettings(pWidgetModel, StringUtils.isNotBlank(inlineDevices)));
  }

  private String getInlineDevices(final Map<String, Object> pModel) {
    Object inlineLoadingDevices = pModel.get("inlineLoadingDevices");
    if (inlineLoadingDevices != null && inlineLoadingDevices instanceof Collection) {
      return StringUtils.join((Collection) inlineLoadingDevices, ",");
    }
    else {
      return "";
    }
  }

  protected Map<String, Map<String, Object>> getLinkSettings(final Map<String, Object> pModel, final boolean pInlineEnabled) {
    Map<String, Map<String, Object>> linkSettings = new HashMap<>();
    List<Map> linkBehaviors = (List<Map>) pModel.get(FIELD_NAME_LINK_SETTINGS);
    if (linkBehaviors != null) {
      for (Map element : linkBehaviors) {
        String linkOn = ((PresentationCollectionValue<String>) element.get("linkon")).getValue();
        String behavior = (String) element.get("onclick");
        linkSettings.put(linkOn, createLinkSettingsEntry(pInlineEnabled, behavior));
      }
    }

    for (Map.Entry<String, String> entry : mLinkBehaviors.entrySet()) {
      if (!linkSettings.containsKey(entry.getKey())) {
        linkSettings.put(entry.getKey(), createLinkSettingsEntry(pInlineEnabled, entry.getValue()));
      }
    }

    return linkSettings;
  }

  protected Map<String, Object> createLinkSettingsEntry(final boolean pInlineEnabled, final String pBehavior) {
    Map<String, Object> settings = new HashMap<>();
    settings.put("behavior", pBehavior);
    settings.put("inline", Boolean.toString(pInlineEnabled && "preferInline".equals(pBehavior)));
    settings.put("enabled", Boolean.toString(!"none".equals(pBehavior)));
    return settings;
  }


  public void addLinkBehaviors(final String pName, final String pBehavior) {
    mLinkBehaviors.put(pName, pBehavior);
  }


}
