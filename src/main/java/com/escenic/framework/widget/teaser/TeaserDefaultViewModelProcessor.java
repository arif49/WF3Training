/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/java/com/escenic/framework/widget/teaser/TeaserDefaultViewModelProcessor.java#1 $
 *
 * Copyright (C) 2013 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.teaser;

import com.escenic.framework.controller.processor.AbstractModelProcessor;
import com.escenic.framework.controller.processor.GenericModelProcessor;

import neo.xredsys.presentation.PresentationArticle;
import neo.xredsys.presentation.PresentationCollectionValue;
import org.apache.commons.lang.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * @author <a href="mailto:mae@vizrt.com">Mohammad Abul Khaer</a>
 * @author last modified by $Author: mae $
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class TeaserDefaultViewModelProcessor extends GenericModelProcessor {
  static final String FEATURE_PREFIX_TEASER_TEXT_SIZE = "element.markup.textsize.";
  static final String FEATURE_PREFIX_TEASER_TAG = "element.markup.tag.";
  static final String FEATURE_PREFIX_TEASER_STYLE_CLASS = "element.markup.class.";
  static final String FIELD_NAME_TEXT_SETTINGS = "textsettings";

  static final String FEATURE_SUFFIX_TEASER_DATE_FORMAT = "element.format.date.";
  static final String DEFAULT_DATE_FORMAT = "dd MMM yyyy HH:mm zz";
  static final String FIELD_NAME_TIME_MODE = "timeMode";

  static final String[] ELEMENT_GROUPS = new String[]{"topelements", "bodyelements", "bottomelements"};
  static final String[] ELEMENT_SETTING_PROPERTIES = new String[]{"htmltag", "styleclass", "textsize"};
  static final String[] DATE_FIELD_NAMES = new String[]{"createdDate", "lastModifiedDate", "publishedDate"};

  @Override
  @SuppressWarnings("unchecked")
  protected void updateModel(final Map<String, Object> pWidgetModel, final PresentationArticle pWidgetContent) {
    Map<String, Object> model = pWidgetModel;
    Map<String, String> widgetProperties = (Map<String, String>) pWidgetModel.get("properties");

    Map<String, String> elementSettings = getElementSettings(model, widgetProperties);
    model.put("elementSettings", elementSettings);
    // deprecated model property, kept here for backward compatibility
    model.put("textSettings", elementSettings);

    String dtMode = model.get(FIELD_NAME_TIME_MODE).toString();
    model.put("dateFormat", getDateFormatSettings(dtMode, widgetProperties));
  }

  /**
   * Creates a compilation of text settings from widget content-type fields and widget properties
   * @param pModel the widget model
   * @param pWidgetProperties widget properties
   * @return text settings for the widget instance
   */
  @SuppressWarnings("unchecked")
  private Map<String, String> getElementSettings(final Map<String, Object> pModel, final Map<String, String> pWidgetProperties) {
    Map<String, String> populatedSettings = createElementSettingsFromSettingsField(pModel, pWidgetProperties);

    populateDefaultElementSettingsFromProperties(pModel, pWidgetProperties, populatedSettings);

    return populatedSettings;
  }

  private Map<String, String> createElementSettingsFromSettingsField(final Map<String, Object> pModel, final Map<String, String> pWidgetProperties) {
    Map<String, String> populatedSettings = new HashMap<>();

    List<Map> elementSettingsList = (List<Map>) pModel.get(FIELD_NAME_TEXT_SETTINGS);

    if (elementSettingsList != null) {
      for (Map<String, Object> elementSettings : elementSettingsList) {
        String element = (String) elementSettings.get("element");
        String key = element + "";

        Object entryValue = elementSettings.get(ELEMENT_SETTING_PROPERTIES[0]);
        if (entryValue != null) {
          populatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[0], (String) entryValue);
        }
        else {
          String wpValue = pWidgetProperties.get(FEATURE_PREFIX_TEASER_TAG + element) != null ?
            pWidgetProperties.get(FEATURE_PREFIX_TEASER_TAG + element) : "" ;
          populatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[0], wpValue);
        }
        entryValue = elementSettings.get(ELEMENT_SETTING_PROPERTIES[1]);
        if (entryValue != null) {
          populatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[1], (String) entryValue);
        }
        else {
          String wpValue = pWidgetProperties.get(FEATURE_PREFIX_TEASER_STYLE_CLASS + element) != null ?
            pWidgetProperties.get(FEATURE_PREFIX_TEASER_STYLE_CLASS + element) : "" ;
          populatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[1], wpValue);
        }
        entryValue = elementSettings.get(ELEMENT_SETTING_PROPERTIES[2]);
        if ( entryValue != null) {
          String textSize = (String) entryValue;

          if (textSize.equals("regular")) {
            populatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[2], "");
          } else {
            String wpValue = pWidgetProperties.get(FEATURE_PREFIX_TEASER_TEXT_SIZE + textSize) != null ?
              pWidgetProperties.get(FEATURE_PREFIX_TEASER_TEXT_SIZE + textSize) : "" ;
            populatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[2], wpValue);

          }
        }
      }
    }
    return populatedSettings;
  }

  private void populateDefaultElementSettingsFromProperties(final Map<String, Object> pModel,
                                                            final Map<String, String> pWidgetProperties,
                                                            final Map<String, String> pPopulatedSettings) {
    Set<String> elements = getAllElements(pModel);
    elements.remove("media");

    if(!elements.isEmpty()) {
      for(String element : elements) {
        String key = element + "";
        if(!pPopulatedSettings.containsKey(key + ELEMENT_SETTING_PROPERTIES[0])) {
          String wpValue = pWidgetProperties.get(FEATURE_PREFIX_TEASER_TAG + element) != null ?
              pWidgetProperties.get(FEATURE_PREFIX_TEASER_TAG + element) : "" ;
          pPopulatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[0], wpValue);
        }
        if(!pPopulatedSettings.containsKey(key + ELEMENT_SETTING_PROPERTIES[1])) {
          String wpValue = pWidgetProperties.get(FEATURE_PREFIX_TEASER_STYLE_CLASS + element) != null ?
              pWidgetProperties.get(FEATURE_PREFIX_TEASER_STYLE_CLASS + element) : "" ;
          pPopulatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[1], wpValue);
        }
        if(!pPopulatedSettings.containsKey(key + ELEMENT_SETTING_PROPERTIES[2])) {
          pPopulatedSettings.put(key + ELEMENT_SETTING_PROPERTIES[2], "");
        }
      }
    }
  }

  private Set<String> getAllElements(final Map<String, Object> pModel) {
    Set<String> elements = new HashSet<>();

    for(String groupName : ELEMENT_GROUPS) {
      if(pModel.get(groupName) != null){
        elements.addAll((List<String>)pModel.get(groupName));
      }
    }
    return elements;
  }

  /**
   * Creates a compilation of date format settings for the date fields from widget content-type fields and
   * widget properties
   * @param pTimeMode time mode field
   * @param pWidgetProperties widget properties
   * @return date formats for the widget instance
   */
  private Map<String, String> getDateFormatSettings(final String pTimeMode, final Map<String, String> pWidgetProperties) {
    Map<String, String> dateMap = new HashMap<>();
    for (String dateFieldName : DATE_FIELD_NAMES) {
      dateMap.put(dateFieldName, getDateFormatForField(dateFieldName, pTimeMode, pWidgetProperties));
    }

    return dateMap;
  }

  private String getDateFormatForField(final String pFieldName,
                                       final String pTimeMode,
                                       final Map<String, String> pWidgetProperties) {

    String dateParameterKey = FEATURE_SUFFIX_TEASER_DATE_FORMAT + pTimeMode + "" + pFieldName;

    String dateFormat = pWidgetProperties.get(dateParameterKey);
    if (StringUtils.isEmpty(dateFormat)) {
      dateFormat = DEFAULT_DATE_FORMAT;
    }

    return dateFormat;

  }

}
