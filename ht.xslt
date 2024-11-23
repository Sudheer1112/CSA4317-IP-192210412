<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html" doctype-public="XSLT-compat" indent="yes"/>
    
    <!-- Template for the root element -->
    <xsl:template match="/products">
        <html>
            <head>
                <title>Electronics Products</title>
            </head>
            <body>
                <h1>Electronics Products</h1>
                <table border="1">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    <!-- Process and display filtered and sorted products -->
                    <xsl:for-each select="product[category='Electronics']">
                        <xsl:sort select="price" data-type="number" order="descending"/>
                        <tr>
                            <td><xsl:value-of select="id"/></td>
                            <td><xsl:value-of select="name"/></td>
                            <td><xsl:value-of select="price"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
