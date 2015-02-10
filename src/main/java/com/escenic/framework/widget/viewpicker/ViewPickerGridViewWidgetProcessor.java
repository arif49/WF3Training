/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-view-picker/src/main/java/com/escenic/framework/widget/viewpicker/ViewPickerGridViewWidgetProcessor.java#1 $
 *
 * Copyright (C) 2014 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.viewpicker;

import com.escenic.common.util.JSONMap;
import com.escenic.framework.controller.processor.GenericWidgetProcessor;
import com.escenic.framework.presentation.ContentResult;

import org.apache.commons.lang.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author <a href="mailto:ivey@escenic.com">Ivey Rashid</a>
 * @author last modified by $Author: mae $
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class ViewPickerGridViewWidgetProcessor extends GenericWidgetProcessor {
  protected static final String MODEL = "model";
  protected static final String GRID_STYLE = "gridstyle";
  protected static final String CONTENT_RESULT = "contentresult";
  protected static final String GRID_WRAPPER_CLASS = "gridWrapperClass";
  protected static final String WRAPPER_STYLES = "wrapperStyles";

  private static final String WRAPPER_STYLE = "wrapperClass";
  private static final String DEFAULT_GRID_WRAPPER = "row";
  private static final String GRID_EDIT_MODE_ATTRIBUTE = "gridEditing";
  private static final String GRID_EDIT_MODE_BASIC = "basic";
  private static final String GRID_EDIT_MODE_ADVANCED = "advanced";
  private static final String GRID_STYLES = "styles";
  private static final String STYLE_NAME = "name";
  private static final String STYLE_CLASSES = "classes";
  private static final String GRID_ITEMS = "gridItems";
  private static final String REPEAT_GRID = "repeatGrid";
  private static final String DEFAULT_STYLE = "defaultStyle";
  private static final String STYLE = "style";


  /**
   * Defines teaser wrapper classes for each teaser in the content result as {@code List}, The list
   * contains (comma separated) style class(es) for each result item. The list can be retrieved in template as
   * {@code widget.model.wrapperStyles}
   *
   * @param pWidgetContext the widget context
   * @param pRequest       the request object
   */
  @Override
  @SuppressWarnings("unchecked")
  protected void process(Map<String, Object> pWidgetContext, HttpServletRequest pRequest) {
    ContentResult contentResult = (ContentResult) pWidgetContext.get(CONTENT_RESULT);
    Map<String, Object> model = (Map<String, Object>) pWidgetContext.get(MODEL);

    if (contentResult.getResultItemCount() > 0) {

      JSONMap gridStyle = (JSONMap) model.get(GRID_STYLE);

      if ((gridStyle != null) && (!gridStyle.isEmpty())) {
        String wrapperStyleClass = gridStyle.getAsString(WRAPPER_STYLE);
        String gridMode = gridStyle.getAsString(GRID_EDIT_MODE_ATTRIBUTE);
        JSONMap.JSONList gridStyles = gridStyle.getAsList(GRID_STYLES);
        JSONMap.JSONList gridItems = gridStyle.getAsList(GRID_ITEMS);
        int repeatGrid = GRID_EDIT_MODE_ADVANCED.equals(gridMode)
                         ? Integer.parseInt(gridStyle.getAsString(REPEAT_GRID))
                         : 0;
        String defaultStyle = GRID_EDIT_MODE_ADVANCED.equals(gridMode)
                              ? gridStyle.getAsString(DEFAULT_STYLE)
                              : "";

        String styleName = "";
        List<String> wrapperStyles = new ArrayList<>();
        for (int i = 0; i < contentResult.getResultItemCount(); i++) {
          styleName = getStyleNameForItem(gridMode,
                                          i,
                                          gridStyles,
                                          gridItems,
                                          repeatGrid,
                                          defaultStyle);

          wrapperStyles.add(getStyleClassesFromStyleName(styleName, gridStyles));
        }

        pWidgetContext.put(GRID_WRAPPER_CLASS, StringUtils.isNotEmpty(wrapperStyleClass)
                                      ? wrapperStyleClass
                                      : DEFAULT_GRID_WRAPPER);

        pWidgetContext.put(WRAPPER_STYLES, wrapperStyles);
      }
    }

  }

  private String getStyleClassesFromStyleName(final String pStyleName, final JSONMap.JSONList pGridStyles) {
    String classes = "";

    if (!pGridStyles.isEmpty()) {
      for (Object pGridStyle : pGridStyles) {
        JSONMap styleMap = (JSONMap) pGridStyle;
        if (styleMap.get(STYLE_NAME).equals(pStyleName)) {
          classes = styleMap.getAsString(STYLE_CLASSES);
          break;
        }
      }
    }
    return classes;
  }

  private String getStyleNameForItem(final String pGridMode,
                                     final int pIndexOfItem,
                                     final JSONMap.JSONList pGridStyles,
                                     final JSONMap.JSONList pGridItems,
                                     final Integer pRepeatGrid,
                                     final String pDefaultStyle) {

    String styleName = "";

    if (GRID_EDIT_MODE_BASIC.equals(pGridMode)) {
      //same style applies to all result items
      styleName = ((JSONMap) pGridStyles.get(0)).getAsString(STYLE_NAME);
    } else if (GRID_EDIT_MODE_ADVANCED.equals(pGridMode)) {
      //find out which style apply to this item
      if (pIndexOfItem < pGridItems.size()) {
        styleName = ((JSONMap) pGridItems.get(pIndexOfItem)).getAsString(STYLE);
      } else if (pIndexOfItem < (pGridItems.size() * pRepeatGrid)) {
        styleName = ((JSONMap) pGridItems.get(pIndexOfItem % pGridItems.size())).getAsString(STYLE);
      } else {
        styleName = pDefaultStyle;
      }
    }

    return styleName;
  }
}
