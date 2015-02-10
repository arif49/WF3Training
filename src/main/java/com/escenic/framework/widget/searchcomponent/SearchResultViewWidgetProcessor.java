/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-search-component/src/main/java/com/escenic/framework/widget/searchcomponent/SearchResultViewWidgetProcessor.java#2 $
 *
 * Copyright (C) 2013 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.searchcomponent;

import com.escenic.framework.controller.ContextAttr;
import com.escenic.framework.controller.processor.GenericWidgetProcessor;
import com.escenic.framework.presentation.ContentResult;
import neo.xredsys.presentation.PresentationArticle;
import neo.xredsys.presentation.PresentationElement;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

/**
 * @author <a href="mailto:$dbs@vizrt.com">Debangshu</a>
 * @author last modified by $Author: nahian $
 * @version $Revision: #2 $ $Date: 2014/08/28 $
 */
public class SearchResultViewWidgetProcessor extends GenericWidgetProcessor {
  @Override
  protected void process(final Map<String, Object> pWidgetContext, final HttpServletRequest pRequest) {

    Map<String, Object> model = (Map<String, Object>) pWidgetContext.get("model");

    String renderingMode = (String) model.get("renderingMode");
    if(renderingMode.equals("delegateView")) {
      // viewRelation
      PresentationArticle widgetContent = (PresentationArticle) pWidgetContext.get(ContextAttr.WIDGET_CONTENT);
      PresentationElement viewWidgetsRelations = widgetContent.getRelatedElements().get("viewRelation");
      if (viewWidgetsRelations != null && !viewWidgetsRelations.getItems().isEmpty()) {
        PresentationElement viewWidgetElement = viewWidgetsRelations.getItems().get(0);
        model.put(ContextAttr.VIEW_WIDGET, viewWidgetElement.getContent());
      }
      ContentResult contentResult = (ContentResult)pRequest.getAttribute("contentSearchResult");
      pWidgetContext.put(ContextAttr.CONTENT_RESULT, contentResult);
    }
  }
}
