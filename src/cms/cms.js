import CMS from "decap-cms-app"
import BlogPostPreview from "./preview-templates/BlogPostPreview"

// Initialize the CMS object
CMS.init()

CMS.registerPreviewTemplate("blog", BlogPostPreview)

//Bugfix workaround: https://github.com/decaporg/decap-cms/issues/5092
CMS.registerPreviewStyle("./cms.css")
