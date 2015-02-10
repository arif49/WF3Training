/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-content-field/src/main/java/com/escenic/framework/widget/contentfield/ContentFieldDefaultViewModelProcessor.java#1 $
 * Copyright (C) 2010 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.contentfield;

import com.escenic.framework.controller.processor.GenericModelProcessor;
import neo.xredsys.presentation.PresentationArticle;
import neo.xredsys.presentation.PresentationCollectionValue;

import org.apache.commons.lang.StringUtils;
import java.util.Map;

/**
 * @author <a href="mailto:dbs@vizrt.com">Debangshu</a>
 * @author last modified by $Author: mae $
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class ContentFieldDefaultViewModelProcessor extends GenericModelProcessor {
  private static final String FEATURE_PREFIX_CONTENT_FIELD_MARKUP = "field.markup.";
  private static final String TAG_PREFIX = "tag.";
  private static final String CLASS_PREFIX = "class.";

  private static final String ID_PHRASE = "id=\"";
  private static final String CLASS_PHRASE = "class=\"";
  private static final String END_PHRASE = "\"";

  private static final String DEFAULT_FIELD_WRAPPER = "p";

  @Override
  protected void updateModel(final Map<String, Object> pWidgetModel, final PresentationArticle pWidgetContent) {
    Map<String, String> widgetProperties = (Map<String, String>) pWidgetModel.get("properties");

    //Collecting the field chosen by the user with a collection field
    String fieldValue = pWidgetModel.get("field") != null ?
      ((PresentationCollectionValue) pWidgetModel.get("field")).getValue().toString() : "";

    String tagParameterKey = FEATURE_PREFIX_CONTENT_FIELD_MARKUP + TAG_PREFIX + fieldValue;
    String fieldWrapper = widgetProperties.get(tagParameterKey);
    if (StringUtils.isEmpty(fieldWrapper)) {
      fieldWrapper = DEFAULT_FIELD_WRAPPER;
    }

    String classParameterKey = FEATURE_PREFIX_CONTENT_FIELD_MARKUP + CLASS_PREFIX + fieldValue;
    String className = widgetProperties.get(classParameterKey);
    if (className == null) {
      className = "";
    }
    //Collecting the values set in the widget, if custom is chosen, these will apply
    String typeFieldWrapper = (String) pWidgetModel.get("fieldWrapperType");
    String customFieldWrapper = (String) pWidgetModel.get("fieldWrapper");
    String customFieldId = (String) pWidgetModel.get("fieldStyleId");
    String customFieldClass = (String) pWidgetModel.get("fieldStyleClass");

    //Choose correct field wrapper, if any (default|custom)
    if (typeFieldWrapper == null || typeFieldWrapper.equalsIgnoreCase("default")) {
      pWidgetModel.put("addFieldWrapper", true);
      pWidgetModel.put("fieldWrapper", fieldWrapper);
      pWidgetModel.put("fieldStyleId", "");
      StringBuilder sbClassName = new StringBuilder(CLASS_PHRASE).append(className).append(END_PHRASE);
      className = StringUtils.isNotBlank(className) ? sbClassName.toString() : "";
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
