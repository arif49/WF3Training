/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/java/com/escenic/framework/widget/teaser/RelatedMediaDecoratorProcessor.java#4 $
 *
 * Copyright (C) 2014 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.teaser;

import com.escenic.framework.controller.processor.ModelProcessorUtil;
import com.escenic.framework.decorator.ResultItemDecorator;
import com.escenic.framework.presentation.ResultItem;
import com.escenic.framework.widget.common.RelatedMediaDecorator;

import neo.xredsys.presentation.PresentationCollectionValue;

import com.google.common.base.Function;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author <a href="mailto:nahian@escenic.com">Nahian</a>
 * @author last modified by $Author: dbs $
 * @version $Revision: #4 $ $Date: 2014/07/23 $
 */
public class RelatedMediaDecoratorProcessor extends RelatedItemDecoratorProcessor {
  ModelProcessorUtil mpUtil = new ModelProcessorUtil();

  @Override
  protected Function<ResultItem, ResultItemDecorator> createResultItemTransformer(final Map<String, Object> pWidgetContext,
                                                                                  final HttpServletRequest pRequest) {
    Map<String, Object> model = getModel(pWidgetContext);

    mpUtil.setCollectionFieldDefaultValue(model, "contenttype", mRelatedContentType);
    mpUtil.setCollectionFieldDefaultValue(model, "relationsource", mRelationSource);
    mpUtil.setCollectionFieldDefaultValue(model, "mediasource", mMediaSource);


    final List<String> mediaContentTypes = getAllowedMediaTypes(model);
    final List<String> mediaRelationNames = mpUtil.getCollectionFieldValueList(model, "mediasource");


    return new Function<ResultItem, ResultItemDecorator>() {
      @Override
      public ResultItemDecorator apply(final ResultItem pResultItem) {
        ResultItemDecorator decoratedItem = new RelatedMediaDecorator(pResultItem, "media",
          mediaRelationNames, mediaContentTypes, Integer.MAX_VALUE
        );
        return decoratedItem;
      }
    };
  }


  private List<String> getAllowedMediaTypes(final Map<String, Object> pModel) {
    List<String> contentTypes = new ArrayList<>();
    List<PresentationCollectionValue> mediaTypeFieldValues = (List<PresentationCollectionValue>) pModel.get("mediacontenttypes");
    if (mediaTypeFieldValues != null) {
      for (PresentationCollectionValue pc : mediaTypeFieldValues) {
        if (pc != null && pc.getValue() != null) {
          contentTypes.add(pc.getValue().toString());
        }
      }
    }
    else {
      contentTypes.add(mMediaContentType);
    }
    //TODO: check if the are really media content types, image? or video?
    return contentTypes;
  }
}
