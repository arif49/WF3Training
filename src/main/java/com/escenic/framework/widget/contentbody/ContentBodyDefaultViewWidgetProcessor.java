/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-content-body/src/main/java/com/escenic/framework/widget/contentbody/ContentBodyDefaultViewWidgetProcessor.java#1 $
 *
 * Copyright (C) 2013 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.contentbody;

import com.escenic.framework.controller.processor.GenericWidgetProcessor;
import com.escenic.framework.presentation.ResultItem;
import com.escenic.framework.presentation.SummaryResultItem;
import neo.xredsys.presentation.PresentationArticle;
import neo.xredsys.presentation.PresentationElement;
import neo.xredsys.presentation.PresentationProperty;
import org.apache.commons.lang.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * @author <a href="mailto:dbs@vizrt.com">Debangshu</a>
 * @author last modified by $Author: mae $
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class ContentBodyDefaultViewWidgetProcessor extends GenericWidgetProcessor {

  @Override
  protected void process(final Map<String, Object> pWidgetContext, final HttpServletRequest pRequest) {
    PresentationArticle article = (PresentationArticle)pRequest.getAttribute("article");

    if(article != null) {
      Map<String, PresentationProperty<?>> map = article.getFields();
      PresentationProperty presentationProperty = map.get("body");
      if (presentationProperty != null && StringUtils.isNotEmpty((String)presentationProperty.getValue()) ){
        pWidgetContext.put("hasContentBody", true);
        Map<String, ResultItem> resultItemMap = new LinkedHashMap<>();

        Map<String, PresentationElement> inlineElements = article.getInlineElements();
        for (Map.Entry<String, PresentationElement> elementEntry : inlineElements.entrySet())
        {
          PresentationElement pElement= elementEntry.getValue();
          SummaryResultItem resultItem = new SummaryResultItem(pElement);
          resultItemMap.put(Integer.toString(pElement.getContent().getId()), resultItem);
        }
        pWidgetContext.put("inlineElement", resultItemMap);
      }
      // when article has no body field
      else {
        pWidgetContext.put("hasContentBody", false);
      }
    }
  }
}
