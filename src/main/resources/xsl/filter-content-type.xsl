<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:xs="http://www.w3.org/2001/XMLSchema"
                xmlns:doc="http://xmlns.vizrt.com/2010/documentation"
                xmlns:geocode="http://xmlns.escenic.com/2009/studio/plugin/geocode"
                xmlns:rep="http://xmlns.escenic.com/2009/representations"
                xmlns:ecect="http://xmlns.escenic.com/2008/content-type"
                xmlns:ui="http://xmlns.escenic.com/2008/interface-hints">

  <!--Copying all the entries to the final content-type file.-->
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>
  <xsl:template match="ecect:content-type">
    <xsl:if test="not(@name=preceding-sibling::ecect:content-type/@name)">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
    </xsl:if>
  </xsl:template>
  <xsl:template match="ecect:field-group">
    <xsl:if test="not(@name=preceding-sibling::ecect:field-group/@name)">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
    </xsl:if>
  </xsl:template>
  <xsl:template match="ecect:relation-type-group">
    <xsl:if test="not(@name=preceding-sibling::ecect:relation-type-group/@name)">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
    </xsl:if>
  </xsl:template>
  <xsl:template match="ui:group">
    <xsl:if test="not(@name=preceding-sibling::ui:group/@name)">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
    </xsl:if>
  </xsl:template>

  <!--The following mentioned elements will be excluded from the merged content-type file.-->
  <!--Must run 'mvn clean install' after excluding an elemetn-->
  <!--<xsl:template match="//ui:group[@name='galleries']" />-->
  <!--<xsl:template match="//ecect:content-type[@name='gallery']" />-->
  <!--<xsl:template match="//ecect:field-group[@name='gallery']" />-->
</xsl:stylesheet>