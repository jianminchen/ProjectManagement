<%@ Page Language="C#" AutoEventWireup="true" CodeFile="ProductsOverview.aspx.cs" Inherits="ProductsOverview" MasterPageFile="~/MasterPage.master" %>
<%@ Register assembly="System.Web.Extensions, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" namespace="System.Web.UI" tagprefix="asp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder_Webpage" runat="server">
    
    <asp:ScriptManager ID="ScriptManager1" runat="server"  EnablePartialRendering="false">
    </asp:ScriptManager>
    <link rel="stylesheet" href="css/fancybox.css"/>
    <link rel="stylesheet" href="css/carousel.css?v=2"/>
    <link rel="stylesheet" href="css/product.css?v=1">
    <script src="js/cefn.js"></script>
    <script src="js/fancybox.js"></script>
    <script src="js/slides.unpacked.js?1500"></script>
	<!--script src="js/slides.min.js"></!--script-->
    <script src="js/utility.js?21"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            if (!$.trim($('#render_caption_div #r_sub').html()).length) {
               // $('#render_caption_div').css('height', '46px');
            };

            //finish hover over 
            //$.getScript("js/finshIconHoverOver/finishIconHoverOver.js");
           
        });  // end of ready()
    </script>
<div id="ContentNeedPadding">
    <section id="carousel_container">
            <div class="container_12" id="carousel_content">

                            <asp:Literal ID="LiteralBorder" runat="server"></asp:Literal>

                <div class="grid_4 suffix_7 alpha" id="carousel_title">
                    <asp:UpdatePanel ID="UpdatePanelFilterContext" runat="server" UpdateMode="Conditional">
                        <ContentTemplate>
                            <asp:Literal ID="LiteralProduct" runat="server"></asp:Literal>
                            <asp:Literal ID="LiteralSubCategory" runat="server"></asp:Literal>
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </div>
               
                        <div class="grid_1">
                            <a id="carousel_toggle"></a>
                        </div>
						 <asp:UpdatePanel ID="UpdatePanelProducts" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <div class="grid_12" style="height: 11px;">
                        </div>
                
                        <div id="carousel_product" class="grid_x">
                            <div class="grid_1 carousel_prev_gap" id="car_prev"><a href="#" class="carousel-prev"></a></div>
                                <asp:PlaceHolder ID="PlaceHolderProductMenu" runat="server"></asp:PlaceHolder>                     
                            <div class="grid_1 carousel_next_gap">
                            <a href="#" class="carousel-next"></a>
                            </div>
                        </div>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <div class="grid_x" id="carousel_b_border"></div>
            </div>
        <div class="clear">&nbsp;</div>
    </section>
    <!-- Carousel Ends-->		
		
    <section id="content"  class="product_view"><!--Everything goes here -->
            <section class="container_12" id="render_container" style="overflow:visible;">
                <asp:UpdatePanel ID="UpdatePanelFinishSlideShow" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderFinishSlideShow" runat="server" ></asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <asp:UpdatePanel ID="UpdatePanelImageWithDimension" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <!-- Work on this part for mounting option buttons -->
                <asp:UpdatePanel ID="UpdatePanelPictureSlideShow" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderPictureSlideShow" runat="server" ></asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
                <!-- End of work on mounting option buttons -->

                <asp:UpdatePanel ID="UpdatePanelProductTitle" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderProductTitle" runat="server">
                            <div class="grid_2 suffix_8" id="render_caption_div">
                                <div id="r_caption">
                                    <asp:Literal ID="LiteralTitleProductName" runat="server"></asp:Literal></div>
                                <div id="r_sub" >
                                    <asp:Literal ID="LiteralTitleDescription" runat="server"></asp:Literal></div>
                            </div>
                        </asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>

                <asp:UpdatePanel ID="UpdatePanelDimension" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderDimension" runat="server"></asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
            </section>
			<div class="clear">&nbsp;</div>
			<!-- Render Ends-->
			                    <div class="container_12" style="position:relative; top:22px; right:20px; z-index:10;" >
                                    <a id="overview_toggle" class ="overview_toggle_off"></a>
                                </div>
			<section class="container_12" id="data_container">
                <asp:PlaceHolder ID="PlaceHolderOverView" runat="server">
                    <asp:UpdatePanel ID="UpdatePanelProductOverview" runat="server" UpdateMode="Conditional">
                        <ContentTemplate>
                            <div id="product_overview_section" class="grid_x data_rows">
                                <div class="grid_2 suffix_1"> 
                                    <div class="row_title">PRODUCT OVERVIEW</div>
                                </div>
                                <div class="grid_4">
                                    <div class="size240 ">                                        
                                      <div class="overview_info">
                                        <span class="row_title"><asp:Literal ID="Literal_A1_Title" runat="server"></asp:Literal></span>
                                        <div>
                                            <asp:Literal ID="Literal_A1" runat="server"></asp:Literal>
                                        </div>
                                        
                                        <span class="row_title"><asp:Literal ID="Literal_B1_Title" runat="server"></asp:Literal></span>
                                        <div>
                                            <asp:Literal ID="Literal_B1" runat="server"></asp:Literal>
                                        </div>
                                        
                                        <span class="row_title"><asp:Literal ID="Literal_C1_Title" runat="server"/></span>
                                        <div>
                                            <asp:Literal ID="Literal_C1" runat="server"></asp:Literal>
                                        </div>
                                        
                                        <span class="row_title"><asp:Literal ID="Literal_D1_Title" runat="server"/></span>                                        
                                        <div>
                                            <asp:Literal ID="Literal_D1" runat="server"></asp:Literal>
                                        </div>

                                        <span class="row_title"><asp:Literal ID="Literal_E1_Title" runat="server"/></span>                                        
                                        <div>
                                            <asp:Literal ID="Literal_E1" runat="server"></asp:Literal>
                                        </div>
                                      </div>
                                    </div>
                                </div>
                                <div class="grid_4">
                                    <div class="size240">                                        
                                      <div class="overview_info">
                                        <span class="row_title"><asp:Literal ID="Literal_A2_Title" runat="server"/></span>
                                        <div >
                                            <asp:Literal ID="Literal_A2" runat="server"></asp:Literal>
                                        </div>

                                        <span class="row_title"><asp:Literal ID="Literal_B2_Title" runat="server"/></span>
                                        <div>
                                            <asp:Literal ID="Literal_B2" runat="server"></asp:Literal>
                                        </div>

                                        <span class="row_title"><asp:Literal ID="Literal_C2_Title" runat="server"/></span>
                                        <div>
                                            <asp:Literal ID="Literal_C2" runat="server"></asp:Literal>
                                        </div>

                                        <span class="row_title"><asp:Literal ID="Literal_D2_Title" runat="server"/></span>
                                        <div>
                                            <asp:Literal ID="Literal_D2" runat="server"></asp:Literal>
                                        </div>

                                        <span class="row_title"><asp:Literal ID="Literal_E2_Title" runat="server"/></span>
                                        <div>
                                            <asp:Literal ID="Literal_E2" runat="server"></asp:Literal>
                                        </div>

                                        <span class="row_title"><asp:image ID="Literal_F2_Image" runat="server"/><asp:Literal ID="Literal_F2" runat="server"/><asp:image ID="Literal_F2_Second_Image" runat="server"/></span>

                                      </div>
                                    </div>
                                </div>
                            </div>
                        </ContentTemplate>
                    </asp:UpdatePanel>
			    </asp:PlaceHolder>	
				<!-- Overview Ends-->
                <asp:UpdatePanel ID="UpdatePanelMountOptions" runat="server"
                    UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderMountOptions" runat="server">
                            <div class="grid_x data_rows ce_enabled">
                                <div class="grid_2 suffix_1">
                                    <div class="row_title" style="padding-bottom:7px;">MOUNTING OPTIONS</div>
                                </div>
                                <asp:PlaceHolder ID="PlaceHolderOptionTitle" runat="server"></asp:PlaceHolder>
                                <asp:PlaceHolder ID="PlaceHolderMountSubCategories" runat="server"></asp:PlaceHolder>
                            </div>
                        </asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
				<!-- MOUNTING Ends-->
                <asp:UpdatePanel ID="UpdatePanelSpecification" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderSpecification" runat="server">
                            <div class="grid_x data_rows ce_enabled">
                                <div class="grid_2 suffix_1">
                                    <div class="row_title" style="padding-bottom:7px;">DOWNLOADS</div>
                                </div>
                                <asp:PlaceHolder ID="PlaceHolderSpecificationTitle" runat="server"></asp:PlaceHolder>
                                <asp:PlaceHolder ID="PlaceHolderSpecificationCategories" runat="server"></asp:PlaceHolder>
                            </div>
                            <!-- SPECIFICATION Ends-->
                        </asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
				<!-- SPECIFICATION Ends-->
                <!-- HARDWARE Starts-->
                  <asp:UpdatePanel ID="UpdatePanelInstallationOptions" runat="server"
                    UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderInstallationOptions" runat="server">
                            
                        </asp:PlaceHolder>                       
                    </ContentTemplate>
                </asp:UpdatePanel>
                
				<!-- HARDWARE Ends-->
                <!-- Transformers/Drivers/Ballast starts-->
                 <asp:UpdatePanel ID="UpdatePanelDriverSection" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                <!-- Drivers LED fixture:  Drivers:  Recommended Driver -->
                <asp:PlaceHolder ID="PlaceHolderDrivers" runat="server">
                <div class="grid_x data_rows">
                    <div class="grid_2 suffix_1">
                        <div class="row_title">DRIVERS</div>
                    </div>
                    <div class="grid_2">
                        <asp:PlaceHolder ID="PlaceHolderRecommendedDriver" runat="server">
                        </asp:PlaceHolder>                       
                    </div>
                   
                    <asp:UpdatePanel ID="UpdatePanelDriverSectionII" runat="server" UpdateMode="Conditional">
                        <ContentTemplate>
                         <asp:PlaceHolder ID="PlaceHolderDriverSection" runat="server">
                         </asp:PlaceHolder>   
                        </ContentTemplate>
                    </asp:UpdatePanel>
                </div>
                </asp:PlaceHolder>        
                        
                <!-- Zhaga Module -->       
                <asp:UpdatePanel ID="UpdatePanelZhagaModule" runat="server"
                    UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderZhagaModule" runat="server">  
                        <div class="grid_x data_rows">
                            <div class="grid_2 suffix_1">
                                <div class="row_title">MODULES</div>
                            </div>
                            <div class="grid_2">                        
                                <asp:PlaceHolder ID="PlaceHolderZhagaLink" runat="server"> 
                                </asp:PlaceHolder>                                                   
                            </div>  
                            <div class="grid_2">                        
                                <asp:PlaceHolder ID="PlaceHolderModuleLink2" runat="server"> 
                                </asp:PlaceHolder>                                                   
                            </div> 
                            <div class="grid_2">                        
                                <asp:PlaceHolder ID="PlaceHolderModuleLink3" runat="server"> 
                                </asp:PlaceHolder>                                                   
                            </div> 
                            <div class="grid_2">                        
                                <asp:PlaceHolder ID="PlaceHolderModuleLink4" runat="server"> 
                                </asp:PlaceHolder>                                                   
                            </div>   
                        </div>
                                                                    
                        </asp:PlaceHolder>                       
                    </ContentTemplate>
                </asp:UpdatePanel>

                <!-- Only show for Low Voltage (Halogen Spotlight) : Transformer: Remote Electronic Remote Magnetic  Surface Mount Electronic Surface Mount Magnetic -->
                <asp:PlaceHolder ID="PlaceHolderTransformers_B" runat="server">
                <div class="grid_x data_rows">
                    <div class="grid_2 suffix_1">
                        <div class="row_title">TRANSFORMERS</div>
                    </div>
                    <div class="grid_2">
                        <a href="<%=ResolveUrl("~/PowerSupplies.aspx?Category=Transformers&Type=RemoteElectronic")%>" target="_blank">Remote Electronic</a>
                    </div>
                    <div class="grid_2">
                        <a href="<%=ResolveUrl("~/PowerSupplies.aspx?Category=Transformers&Type=RemoteMagnetic")%>" target="_blank">Remote Magnetic</a>
                    </div>
                    <div class="grid_2">
                        <a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=PowerSupplies&SubMenu=SurfaceMountTransformer")%>" target="_blank">Surface Mount Electronic</a>
                    </div>
                   
                </div>
                </asp:PlaceHolder>   
                
                <asp:PlaceHolder ID="PlaceHolderTransformers_X02" runat="server">
                <div class="grid_x data_rows">
                    <div class="grid_2 suffix_1">
                        <div class="row_title">TRANSFORMERS</div>
                    </div>
                    <div class="grid_2">
                        <a href="<%=ResolveUrl("~/PowerSupplies.aspx?Category=Transformers&Type=RemoteElectronicForX02")%>" target="_blank">Remote Electronic</a>
                    </div>
                    <div class="grid_2">
                        <a href="<%=ResolveUrl("~/PowerSupplies.aspx?Category=Transformers&Type=RemoteMagneticForX02")%>" target="_blank">Remote Magnetic</a>
                    </div>
                    <div class="grid_2">
                        <a href="<%=ResolveUrl("~/ProductsOverview.aspx?MainMenu=PowerSupplies&SubMenu=SurfaceMountTransformer")%>" target="_blank">Surface Mount Electronic</a>
                    </div>
                   
                </div>
                </asp:PlaceHolder>                  

                <!-- Only show for line voltage items: Line Voltage  Ballasts  -->
                <asp:PlaceHolder ID="PlaceHolderBallasts" runat="server">
                <div class="grid_x data_rows">
                    <div class="grid_2 suffix_1">
                        <div class="row_title">BALLASTS</div>
                    </div>
                    <div class="grid_2">
                        <a href="<%=ResolveUrl("~/PowerSupplies.aspx?Category=ReplacementBallasts&Type=Fluorescent")%>" target="_blank">Fluorescent</a>
                    </div>
                    <div class="grid_2">
                        <a href="<%=ResolveUrl("~/PowerSupplies.aspx?Category=ReplacementBallasts&Type=MetalHalide")%>" target="_blank">Metal Halide</a>
                    </div>                   
                </div>
                </asp:PlaceHolder> 
               
                <asp:UpdatePanel ID="UpdatePanelTransformersDynamic" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                         <asp:PlaceHolder ID="PlaceHolderTransformersDynamic" runat="server">
                         </asp:PlaceHolder>   
                    </ContentTemplate>
                </asp:UpdatePanel>
                
                    </ContentTemplate>
                </asp:UpdatePanel>

                <!--end of Transformers/Ballasts-->
                <!-- Light Distribution starts-->
                <asp:UpdatePanel ID="UpdatePanelLightDistribution" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderLightDistribution" runat="server"></asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
				<!-- Light Distribution Ends-->

                <!-- Applications/Projects starts-->
                <asp:UpdatePanel ID="UpdatePanelApplications" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderApplications" runat="server"></asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
				<!-- Application Ends-->

                <asp:UpdatePanel ID="UpdatePanelPhotometrics" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderPhotometrics" runat="server">
                            <div class="grid_x data_rows ">
                                <div class="grid_2 suffix_1">
                                    <div class="row_title">PHOTOMETRICS</div>
                                </div>
                                <asp:PlaceHolder ID="PlaceHolderPhotometricsItems" runat="server"></asp:PlaceHolder>
                            </div>                           
                        </asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
				<!-- PHOTOMETRICS Ends-->

                 <asp:UpdatePanel ID="UpdatePanelEulumDat" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderEulumDat" runat="server">
                            <div class="grid_x data_rows ">
                                <div class="grid_2 suffix_1">
                                    <div class="row_title">EULUMDAT</div>
                                </div>
                                <asp:PlaceHolder ID="PlaceHolderEulumDatItems" runat="server"></asp:PlaceHolder>
                            </div>                           
                        </asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
				<!-- EULUMDAT Ends-->

                <asp:UpdatePanel ID="UpdatePanel3DModels" runat="server" UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolder3DModels" runat="server">

                            <div class="grid_x data_rows ">
                                <div class="grid_2 suffix_1">
                                    <div class="row_title">3D MODELS</div>
                                </div>
                                <asp:PlaceHolder ID="PlaceHolder3DModelsItems" runat="server"></asp:PlaceHolder>
                            </div>

                        </asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel>
		 
				<!-- MODELS Ends-->
 
                <!--Accessories/Shades-->
                <asp:UpdatePanel ID="UpdatePanelAccessoryShade" runat="server"
                    UpdateMode="Conditional">
                    <ContentTemplate>
                        <asp:PlaceHolder ID="PlaceHolderAccessoryShade" runat="server">
                            <div class="grid_x data_rows ce_enabled">
                                <div class="grid_2 suffix_1">
                                    <div class="row_title" style="padding-bottom:7px;">ACCESSORIES/SHADES</div>
                                </div>
                                <asp:PlaceHolder ID="PlaceHolderAccessoryShade_Title" runat="server"></asp:PlaceHolder>
                                <asp:PlaceHolder ID="PlaceHolderAccessoryShade_Options" runat="server"></asp:PlaceHolder>
                            </div>
                        </asp:PlaceHolder>
                    </ContentTemplate>
                </asp:UpdatePanel> 

                 <asp:UpdatePanel ID="UpdatePanelAccessoryShadeWebLink" runat="server"
                    UpdateMode="Conditional">
                    <ContentTemplate>
                    <asp:PlaceHolder ID="PlaceHolderAccessoriesShades_Links" runat="server">
                    <div class="grid_x data_rows">
                        <div class="grid_2 suffix_1">
                            <div class="row_title">ACCESSORIES/SHADES</div>
                        </div>
                        <div class="grid_2">
                            <a href="Accessories.aspx?Category=LowVoltage&Type=Accessories" target="_blank">Accessories</a>
                        </div>
                        <div class="grid_2">
                            <a href="Shades.aspx?Category=LowVoltage&Type=Shades" target="_blank">Shades</a>
                        </div>
                    </div>
                    </asp:PlaceHolder>     
                </ContentTemplate>
                </asp:UpdatePanel>

				<!-- ACCESSORIES Ends-->

                <!-- TOOLS STARTs-->
                <asp:UpdatePanel ID="UpdatePanelTOOLS" runat="server" UpdateMode="Conditional">
                <ContentTemplate>
                    <asp:PlaceHolder ID="PlaceHolderTools" runat="server">
                    <div class="grid_x data_rows" id="r_spec">
                        <div class="grid_2 suffix_1">
                            <div class="row_title">TOOLS</div>
                        </div>
                        <div class="grid_2">                       
                           <a href="<%=ResolveUrl("~/tools/WireLength.aspx")%>" target="_blank">Wire Length Calculator</a>								
                        </div>                    
                    </div>
                </asp:PlaceHolder> 
                </ContentTemplate>
                </asp:UpdatePanel> 
				<!-- TOOLS Ends-->                 
  
			</section>
			<div class="clear">&nbsp;</div>
		</section>
    </div>
</asp:Content>
