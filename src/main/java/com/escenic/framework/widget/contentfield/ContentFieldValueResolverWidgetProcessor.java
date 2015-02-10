/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-content-field/src/main/java/com/escenic/framework/widget/contentfield/ContentFieldValueResolverWidgetProcessor.java#1 $
 *
 * Copyright (C) 2014 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.contentfield;

import com.escenic.framework.controller.processor.GenericWidgetProcessor;
import neo.xredsys.presentation.PresentationArticle;
import neo.xredsys.presentation.PresentationCollectionValue;
import neo.xredsys.presentation.PresentationCollectionValueTag;
import neo.xredsys.presentation.PresentationProperty;
import org.apache.commons.lang.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Map;

/**
 * @author <a href="mailto:$dbs@escenic.com">Debangshu</a>
 * @author last modified by $Author: mae $
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class ContentFieldValueResolverWidgetProcessor extends GenericWidgetProcessor{

  private static final String FEATURE_PREFIX_CONTENT_FIELD_DATE_FORMAT = "field.format.date";

  @Override
  protected void process(final Map<String, Object> pWidgetContext, final HttpServletRequest pRequest) {
    PresentationArticle article = (PresentationArticle) pRequest.getAttribute("article");
    if (article != null) {
      Map<String, Object> model = (Map<String, Object>) pWidgetContext.get("model");
      Map<String, String> widgetProperties = (Map<String, String>) pWidgetContext.get("properties");

      //Collecting the field chosen by the user with a collection field
      String fieldValue = model.get("field") != null ? ((PresentationCollectionValue) model.get("field")).getValue().toString() : "";
      String contentItemFieldValue = getPresentationValue(fieldValue, article, widgetProperties);
      pWidgetContext.put("contentItemFieldValue", contentItemFieldValue);
    }
  }

  private String getPresentationValue(String fieldValue,
                                      PresentationArticle article,
                                      Map<String, String> pWidgetProperties) {

    String result = "";
    if (article != null && StringUtils.isNotEmpty(fieldValue)) {
      Map<String, PresentationProperty<?>> map = article.getFields();
      PresentationProperty presentationProperty = map.get(fieldValue);

      if (presentationProperty != null) {
        if (presentationProperty.getValue() != null) {
          Object value = presentationProperty.getValue();

          if (value instanceof java.util.Date) {
            String requiredDateFormat = pWidgetProperties.get(FEATURE_PREFIX_CONTENT_FIELD_DATE_FORMAT);
            DateFormat df = new SimpleDateFormat(requiredDateFormat);
            result = df.format(value);
          }
          else if(value instanceof PresentationCollectionValueTag) {
            result = ((PresentationCollectionValueTag) value).getValue().getName();
          }
          else {
            result = value.toString();
          }
        }
      }
    }
    return result;
  }
}
