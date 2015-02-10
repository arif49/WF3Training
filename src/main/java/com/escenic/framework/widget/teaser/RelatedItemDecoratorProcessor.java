/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-teaser/src/main/java/com/escenic/framework/widget/teaser/RelatedItemDecoratorProcessor.java#4 $
 *
 * Copyright (C) 2014 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.teaser;

import com.escenic.framework.controller.processor.ModelProcessorUtil;
import com.escenic.framework.controller.processor.ResultItemDecoratorProcessor;
import com.escenic.framework.decorator.ResultItemDecorator;
import com.escenic.framework.presentation.ResultItem;
import com.escenic.framework.widget.common.RelatedItemDecorator;
import com.escenic.framework.widget.common.RelatedImageDecorator;
import com.google.common.base.Function;
import neo.xredsys.presentation.PresentationCollectionValue;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author <a href="mailto:nahian@escenic.com">Nahian</a>
 * @author last modified by $Author: dbs $
 * @version $Revision: #4 $ $Date: 2014/07/23 $
 */
public class RelatedItemDecoratorProcessor extends ResultItemDecoratorProcessor {
  ModelProcessorUtil mpUtil = new ModelProcessorUtil();

  protected String mMediaContentType;
  protected String mMediaSource;
  protected String mRelatedContentType;
  protected String mRelationSource;

  @Override
  protected Function<ResultItem, ResultItemDecorator> createResultItemTransformer(final Map<String, Object> pWidgetContext,
                                                                                  final HttpServletRequest pRequest) {
    Map<String, Object> model = getModel(pWidgetContext);

    mpUtil.setCollectionFieldDefaultValue(model, "contenttype", mRelatedContentType);
    mpUtil.setCollectionFieldDefaultValue(model, "relationsource", mRelationSource);
    mpUtil.setCollectionFieldDefaultValue(model, "mediasource", mMediaSource);


    final List<String> mediaContentTypes = getAllowedMediaTypes(model);
    final List<String> mediaRelationNames = mpUtil.getCollectionFieldValueList(model, "mediasource");

    final List<String> itemRelationNames = mpUtil.getCollectionFieldValueList(model, "relationsource");
    final List<String> relatedItemContentTypes = mpUtil.getCollectionFieldValueList(model, "contenttype");
    final Number maxRelatedItems = (Number) model.get("maxrelations");


    return new Function<ResultItem, ResultItemDecorator>() {
      @Override
      public ResultItemDecorator apply(final ResultItem pResultItem) {
        ResultItemDecorator decoratedItem = new RelatedImageDecorator(pResultItem, "images",
            mediaRelationNames, mediaContentTypes, Integer.MAX_VALUE
        );
        decoratedItem = new RelatedItemDecorator(decoratedItem, "articles",
            itemRelationNames, relatedItemContentTypes, maxRelatedItems.intValue()
        );
        return decoratedItem;
      }
    };
  }


  private List<String> getAllowedMediaTypes(final Map<String, Object> pModel) {
    List<String> contentTypes = new ArrayList<>();
    PresentationCollectionValue mediaTypeFieldValue = (PresentationCollectionValue) pModel.get("mediacontenttype");
    if (mediaTypeFieldValue != null && mediaTypeFieldValue.getValue() != null) {
      contentTypes.add(mediaTypeFieldValue.getValue().toString());
    } else {
      contentTypes.add(mMediaContentType);
    }
    //TODO: check if the are really media content types, image? or video?
    return contentTypes;
  }


  public String getMediaContentType() {
    return mMediaContentType;
  }

  public void setMediaContentType(final String pMediaContentType) {
    mMediaContentType = pMediaContentType;
  }


  public String getRelationSource() {
    return mRelationSource;
  }

  public void setRelationSource(final String pRelationSource) {
    mRelationSource = pRelationSource;
  }

  public String getRelatedContentType() {
    return mRelatedContentType;
  }

  public void setRelatedContentType(final String pRelatedContentType) {
    mRelatedContentType = pRelatedContentType;
  }

  public String getMediaSource() {
    return mMediaSource;
  }

  public void setMediaSource(final String pMediaSource) {
    mMediaSource = pMediaSource;
  }
}
