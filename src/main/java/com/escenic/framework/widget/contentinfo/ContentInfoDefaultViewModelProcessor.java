/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-content-info/src/main/java/com/escenic/framework/widget/contentinfo/ContentInfoDefaultViewModelProcessor.java#1 $
 * Copyright (C) 2010 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */

package com.escenic.framework.widget.contentinfo;

import com.escenic.framework.controller.processor.GenericModelProcessor;
import neo.xredsys.presentation.PresentationArticle;
import org.apache.commons.lang.StringUtils;

import java.util.*;

/**
 * @author <a href="mailto:dbs@vizrt.com">Debangshu</a>
 * @author last modified by $Author: mae $
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class ContentInfoDefaultViewModelProcessor extends GenericModelProcessor {

  private static final String FEATURE_PREFIX_CONTENT_INFO_MARKUP = "info.markup.";
  private static final String FEATURE_PREFIX_CONTENT_INFO_FORMAT = "info.format.";
  private static final String FEATURE_PREFIX_CONTENT_INFO_TAG = "tag.";
  private static final String FEATURE_PREFIX_CONTENT_INFO_CLASS = "class.";

  private static final String ID_PHRASE = "id=\"";
  private static final String CLASS_PHRASE = "class=\"";
  private static final String END_PHRASE = "\"";

  @Override
  protected void updateModel(final Map<String, Object> pWidgetModel, final PresentationArticle pWidgetContent) {
    Map<String, String> widgetProperties = (Map<String, String>) pWidgetModel.get("properties");
    String fieldValue = pWidgetModel.get("information") != null ? pWidgetModel.get("information").toString() : "";

    String tagParameterKey = FEATURE_PREFIX_CONTENT_INFO_MARKUP + FEATURE_PREFIX_CONTENT_INFO_TAG + fieldValue;
    String fieldWrapper = widgetProperties.get(tagParameterKey);

    String classParameterKey = FEATURE_PREFIX_CONTENT_INFO_MARKUP + FEATURE_PREFIX_CONTENT_INFO_CLASS + fieldValue;
    String className = widgetProperties.get(classParameterKey);

    String dateParameterKey = FEATURE_PREFIX_CONTENT_INFO_FORMAT + fieldValue;
    String dateFormat = widgetProperties.get(dateParameterKey);

    pWidgetModel.put("dateFormat", dateFormat);
    setFieldWrapper(pWidgetModel, fieldWrapper, className);
  }

  /**
   * @param pWidgetModel - the widget model map
   * @param pFieldWrapper
   * @param pClassName
   */
  private void setFieldWrapper(final Map<String, Object> pWidgetModel, final String pFieldWrapper, final String pClassName) {
    //Collecting the values set in the widget, if custom is chosen, these will apply
    String typeFieldWrapper = (String) pWidgetModel.get("fieldWrapperType");
    String customFieldWrapper = (String) pWidgetModel.get("fieldWrapper");
    String customFieldId = (String) pWidgetModel.get("fieldStyleId");
    String customFieldClass = (String) pWidgetModel.get("fieldStyleClass");

    //Choose correct field wrapper, if any (default|custom)
    if (typeFieldWrapper == null || typeFieldWrapper.equalsIgnoreCase("default")) {
      pWidgetModel.put("addFieldWrapper", true);
      pWidgetModel.put("fieldWrapper", pFieldWrapper);
      pWidgetModel.put("fieldStyleId", "");
      StringBuilder sbClassName = new StringBuilder(CLASS_PHRASE).append(pClassName).append(END_PHRASE);
      String className = StringUtils.isNotBlank(pClassName) ? sbClassName.toString() : "";
      pWidgetModel.put("fieldStyleClass", className);
    }
    //Custom
    else if (customFieldWrapper != null && !customFieldWrapper.equalsIgnoreCase("nowrap")) {
      pWidgetModel.put("addFieldWrapper", true);
      pWidgetModel.put("fieldWrapper", customFieldWrapper);
      StringBuilder sbCustom = new StringBuilder(ID_PHRASE).append(customFieldId).append(END_PHRASE);
      customFieldId = StringUtils.isNotBlank(customFieldId) ? sbCustom.toString() : "";
      pWidgetModel.put("fieldStyleId", customFieldId);
      sbCustom = new StringBuilder(CLASS_PHRASE).append(customFieldClass).append(END_PHRASE);
      customFieldClass = StringUtils.isNotBlank(customFieldClass) ? sbCustom.toString() : "";
      pWidgetModel.put("fieldStyleClass", customFieldClass);
    }
    else {
      pWidgetModel.put("addFieldWrapper", false);
    }
  }
}