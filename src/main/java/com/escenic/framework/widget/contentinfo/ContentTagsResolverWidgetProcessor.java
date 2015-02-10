/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-content-info/src/main/java/com/escenic/framework/widget/contentinfo/ContentTagsResolverWidgetProcessor.java#1 $
 *
 * Copyright (C) 2014 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.contentinfo;

import com.escenic.framework.controller.processor.GenericWidgetProcessor;
import com.google.common.base.Predicate;
import com.google.common.collect.Collections2;
import neo.xredsys.presentation.PresentationArticle;
import neo.xredsys.presentation.PresentationCollectionValueTagStructure;
import neo.xredsys.presentation.PresentationTag;
import org.apache.commons.collections.CollectionUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * @author <a href="mailto:$dbs@escenic.com">Debangshu</a>
 * @author last modified by $Author: mae $
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class ContentTagsResolverWidgetProcessor extends GenericWidgetProcessor {
  @Override
  protected void process(final Map<String, Object> pWidgetContext, final HttpServletRequest pRequest) {
    PresentationArticle article = (PresentationArticle) pRequest.getAttribute("article");

    if (article != null) {
      Map<String, Object> model = (Map<String, Object>) pWidgetContext.get("model");
      String fieldValue = model.get("information") != null ? model.get("information").toString() : "";

      if (fieldValue.equals("contentTags")) {
        String orderBy = (String) model.get("orderBy");
        List<PresentationTag> tags = new ArrayList<PresentationTag>(article.getTags());
        final List<PresentationCollectionValueTagStructure> tagStructures = (List<PresentationCollectionValueTagStructure>) model.get("filter");
        List<PresentationTag> filteredTags;
        if (CollectionUtils.isNotEmpty(tagStructures)) {
          //filtering the tags list based on schema names.
          Collection<PresentationTag> filteredTagCollection = Collections2.filter(tags, new Predicate<PresentationTag>() {
            @Override
            public boolean apply(PresentationTag presentationTag) {
              String tagId = presentationTag.getId().toString();
              for (PresentationCollectionValueTagStructure schema : tagStructures) {
                if (tagId.startsWith(schema.getValue().getId().toString())) {
                  return true;
                }
              }
              return false;
            }
          });
          filteredTags = new ArrayList<PresentationTag>(filteredTagCollection);
        }
        else {
          filteredTags = tags;
        }
        if (orderBy.equals("relevance")) {
          Collections.sort(filteredTags, new Comparator<PresentationTag>() {
            @Override
            public int compare(PresentationTag o1, PresentationTag o2) {
              return ((Double) o1.getRelevance()).compareTo(((Double) o2.getRelevance()));
            }
          });
          Collections.reverse(filteredTags);
        }
        else {
          Collections.sort(filteredTags, new Comparator<PresentationTag>() {
            @Override
            public int compare(PresentationTag o1, PresentationTag o2) {
              return o1.getName().compareToIgnoreCase(o2.getName());
            }
          });
        }
        pWidgetContext.put("tags", filteredTags);
      }
    }
  }

}
