/*
 *$Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-view-picker/src/main/java/com/escenic/framework/widget/viewpicker/ViewPickerDefaultViewModelProcessor.java#2 $
 *
 * Copyright (C) 2013 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */

package com.escenic.framework.widget.viewpicker;

import com.escenic.framework.controller.ContextAttr;
import com.escenic.framework.controller.processor.GenericModelProcessor;
import neo.xredsys.presentation.PresentationArticle;
import neo.xredsys.presentation.PresentationElement;

import java.util.Map;

/**
 * @author <a href="mailto:sms@vizrt.com">Sharif Mohammad Shahnewaz Ferdous</a>
 * @author last modified by $Author: nahian $
 * @version $Revision: #2 $ $Date: 2014/08/28 $
 */

public class ViewPickerDefaultViewModelProcessor extends GenericModelProcessor {
  @Override
  protected void updateModel(final Map<String, Object> pWidgetModel, final PresentationArticle pWidgetContent){

    String renderingMode = (String) pWidgetModel.get("renderingMode");
    if(renderingMode.equalsIgnoreCase("delegateView")) {
      PresentationElement viewWidgetsRelations = pWidgetContent.getRelatedElements().get("viewRelation");
      if (viewWidgetsRelations != null && viewWidgetsRelations.getItems().isEmpty() == false) {
        PresentationElement viewWidgetElement = viewWidgetsRelations.getItems().get(0);
        pWidgetModel.put(ContextAttr.VIEW_WIDGET, viewWidgetElement.getContent());
      }
    }
  }

}