/*
 * $Header: //depot/escenic/widget-framework/branches/3.2/widget-framework-core-module/widget-core-search-component/src/main/java/com/escenic/framework/widget/searchcomponent/SearchPaginationViewWidgetProcessor.java#1 $
 *
 * Copyright (C) 2013 Escenic AS.
 * All Rights Reserved.  No use, copying or distribution of this
 * work may be made except in accordance with a valid license
 * agreement from Escenic AS.  This notice must be included on all
 * copies, modifications and derivatives of this work.
 */
package com.escenic.framework.widget.searchcomponent;

import com.escenic.framework.controller.processor.AbstractModelProcessor;
import com.escenic.framework.controller.processor.GenericWidgetProcessor;
import com.escenic.framework.presentation.ContentResult;
import com.escenic.framework.tag.util.EWFUtil;

import org.apache.commons.lang.StringUtils;

import javax.servlet.http.HttpServletRequest;

import java.util.*;

/**
 * @author <a href="mailto:IRashid@vizrt.com">Ivey Rashid</a>
 * @author last modified by $Author: mae $
 * @version $Revision: #1 $ $Date: 2014/07/09 $
 */
public class SearchPaginationViewWidgetProcessor extends GenericWidgetProcessor {
  @Override
  @SuppressWarnings("unchecked")
  protected void process(Map<String, Object> pWidgetContext, HttpServletRequest pRequest) {
    Map<String, Object> model = (Map<String, Object>) pWidgetContext.get("model");
    ResourceBundle resourceBundle = ResourceBundle.getBundle("com.escenic.framework.ApplicationResources");
    ContentResult contentSearchResult = (ContentResult) pRequest.getAttribute("contentSearchResult");

    List<PaginationLinkObject> paginationLinkInfo = new ArrayList<>();

    int totalItems = contentSearchResult.getTotalItemCount();
    if(totalItems > 0){
      int itemsPerPage = contentSearchResult.getCount();
      int totalPages = ((totalItems - 1) / itemsPerPage) + 1;

      if (totalPages  > 1) {
        String pageURL = EWFUtil.generatePageURLWithQueryString(pRequest);
        Map<String, String> parameters = new HashMap<>();

        int currentPage = 1;
        String currentPageNo = pRequest.getParameter("page");
        if (StringUtils.isNotEmpty(currentPageNo)) {
          currentPage = Integer.parseInt(currentPageNo);
        }

        int totalPageLinks = ((Number) model.get("maxPageLink")).intValue();
        int firstPageNo = 1;
        int lastPageNo = totalPages;
        int offsetBefore =  totalPageLinks / 2;
        int offsetAfter = (totalPageLinks % 2 == 0) ? (offsetBefore - 1) : offsetBefore;

        if (totalPageLinks >= totalPages) {/*Initial values remain true.*/}
        else if (currentPage <= (offsetBefore + 1)) {
          lastPageNo = firstPageNo + totalPageLinks - 1;
        }
        else if (currentPage >= (totalPages - offsetAfter)) {
          lastPageNo = totalPages;
          firstPageNo = lastPageNo - totalPageLinks + 1;
        }
        else {
          firstPageNo = currentPage - offsetBefore;
          lastPageNo = currentPage + offsetAfter;
        }

        int previousPage = currentPage - 1;
        String previousPageURL = "#";
        if (previousPage > 0) {
          parameters.put("page", String.valueOf(previousPage));
          previousPageURL = EWFUtil.generatePageURL(pageURL, parameters);
        }
        paginationLinkInfo.add(
          new PaginationLinkObject(
            resourceBundle.getString("search.component.widget.searchpagerview.previous"),
            previousPageURL
          )
        );

        for (int i = firstPageNo; i <= lastPageNo; i++) {
          String pageNo = String.valueOf(i);
          parameters.put("page", pageNo);

          paginationLinkInfo.add(new PaginationLinkObject(pageNo,
            EWFUtil.generatePageURL(pageURL, parameters),
            i == currentPage));

        }

        int nextPage = currentPage + 1;
        String nextPageURL = "#";
        if (currentPage < totalPages) {
          parameters.put("page", String.valueOf(nextPage));
          nextPageURL = EWFUtil.generatePageURL(pageURL, parameters);
        }
        paginationLinkInfo.add(
          new PaginationLinkObject(
            resourceBundle.getString("search.component.widget.searchpagerview.next"),
            nextPageURL
          )
        );
      }
    }

    pWidgetContext.put("paginationLinkInfo", paginationLinkInfo);
  }

  public class PaginationLinkObject {
    private String mLinkText;
    private String mLinkURL;
    private boolean mActive;

    public PaginationLinkObject(String pLinkText, String pLinkURL) {
      this(pLinkText, pLinkURL, false);
    }

    public PaginationLinkObject(String pLinkText, String pLinkURL, boolean pActiveLink) {
      this.mLinkText = pLinkText;
      this.mLinkURL = pLinkURL;
      this.mActive = pActiveLink;
    }

    public String getLinkText() {
      return mLinkText;
    }

    public void setLinkText(final String pLinkText) {
      mLinkText = pLinkText;
    }

    public String getLinkURL() {
      return mLinkURL;
    }

    public void setLinkURL(final String pLinkURL) {
      mLinkURL = pLinkURL;
    }

    public boolean isActive() {
      return mActive;
    }

    public void setActive(final boolean pActive) {
      mActive = pActive;
    }
  }
}
