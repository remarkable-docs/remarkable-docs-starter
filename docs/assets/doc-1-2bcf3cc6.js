import{j as o}from"./index-44f2c6a7.js";const t="/assets/example-button-a0cc3899.png",a=`<h1 id="introduction-to-remarkable-docs" tabindex="-1">Introduction to Remarkable Docs<a class="docs-ui-anchor" href="#introduction-to-remarkable-docs" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h1>
<p>Remarkable Docs is a simple and flexible documentation tool for <a href="https://reactjs.org/">React</a>.</p>
<p>You can document, preview and test your <a href="https://reactjs.org/">React</a> Components with Remarkable Docs.</p>
<h2 id="the-way-to-document-a-react-component" tabindex="-1">The Way to Document a React Component<a class="docs-ui-anchor" href="#the-way-to-document-a-react-component" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h2>
<p>Before we dive into any details, I want to give you an example of how we can document a <a href="https://reactjs.org/">React</a> component using Remarkable Docs.</p>
<p>Below is the markdown we use to document the <strong>Button</strong> component from the <code>@remarkable-docs/example-ui</code> package.</p>`,n="md",s=`---
slug: /components/button
menu: Components
---

# Button

Buttons allow users to take actions with a single click.

## Usage

\`\`\`tsx --preview --open
import '@remarkable-docs/example-ui/styles.css'
import { Button } from '@remarkable-docs/example-ui'

export default () => {
  return (
    <Button onClick={() => alert('You just clicked the button!')}>
      Button
    </Button>
  )
}
\`\`\`

## Props

\`\`\`yml --renderer=props
- name: className
  type: string
  desc: Specify the css class name.
- name: onClick
  type: '(e: MouseEvent) => void'
  desc: Specify the click event listener.
\`\`\`
`,c=`<p>And this markdown will be rendered to a document page like the following screenshot.</p>
<p><img src="`+t+`" alt="button example"></p>
<p>As you can see in the markdown file, we have written two code blocks. The first one is a <code>tsx</code> code block which exports a React component as the default export value. Note that in this code block, we also added two flags. There are:</p>
<ul>
<li><code>--preview</code> Indicates that this is a preview block. The React component exported by this code block will be rendered to the page and the source code should be displayed too.</li>
<li><code>--open</code> By default, the source code panel of the preview is collapsed. We add this flag to make it open by default.</li>
</ul>
<p>The second code block is a <code>yml</code> code block. In this code block, we defined a list of objects. Add we also added a special flag to this code block. Which is:</p>
<ul>
<li><code>--renderer=props</code> Indicates that the data defined in this code block should be passed to the Renderer called &quot;props&quot;. The <strong>props</strong> renderer is a built-in renderer that renders the given data to a property table. We provide several built-in renders, and you can add yours easily.</li>
</ul>
<p>Check the screenshot above, you can see that the preview block and property table have been rendered properly. That is how we document React components with Remarkable Docs.</p>
<h2 id="design-principles-and-features" tabindex="-1">Design Principles and Features<a class="docs-ui-anchor" href="#design-principles-and-features" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h2>
<h3 id="keep-your-source-code-clean" tabindex="-1">Keep Your Source Code Clean<a class="docs-ui-anchor" href="#keep-your-source-code-clean" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h3>
<p>Remarkable Docs will not install any dependencies into your source code package. Instead, we'll start a new project to document your components. This will keep your source code package clean and you don't have to worry about documentation tools messing up your source code. And documenting your components in a standalone package is more like how a real user will use your components.</p>
<p>Remarkable Docs consists of several packages. The main package just converts markdown files into <a href="https://reactjs.org/">React</a> components, and the UI package is used to render the components generated by the main package. We provide a default template, which contains our default UI package (if the default UI package cannot meet your needs, you can replace it with yours).</p>
<h3 id="extended-markdown" tabindex="-1">Extended Markdown<a class="docs-ui-anchor" href="#extended-markdown" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h3>
<p>Remarkable Docs extended markdown by taking advantage of the fenced code block. You can preview your components in markdown and display their associated source code. You can also embed your components into markdown to make them part of the document. And you can extend markdown by writing your renderer.</p>
<h3 id="use-react-components-to-render-pages" tabindex="-1">Use React Components to Render Pages<a class="docs-ui-anchor" href="#use-react-components-to-render-pages" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h3>
<p>We use markdown as the primary format to write documents for the components. In addition, we can also use the <a href="https://reactjs.org/">React</a> component as the source of the document. In this case, we can fully control how to render the entire page. When you have some special pages on the document website (such as the homepage), this is useful.</p>
<h3 id="static-site-generation" tabindex="-1">Static Site Generation<a class="docs-ui-anchor" href="#static-site-generation" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h3>
<p>We provide you with a default template that uses <a href="https://vitejs.dev/">Vite</a> as the build tool. In this template, we also provide you with a script to pre-render your website before publishing (also known as static site generation).</p>
<h3 id="internationalization-(i18n)" tabindex="-1">Internationalization (i18n)<a class="docs-ui-anchor" href="#internationalization-(i18n)" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h3>
<p>Remarkable Docs supports i18n out of the box. You can add multiple languages to your documents easily.</p>
<h3 id="search-your-docs" tabindex="-1">Search Your Docs<a class="docs-ui-anchor" href="#search-your-docs" aria-hidden="true"><span class="docs-ui-octicon"></span></a></h3>
<p>With Remarkable Docs, You can search your documents by title, summary or tags.</p>`,r=[{tag:"h1",title:"Introduction to Remarkable Docs",slug:"introduction-to-remarkable-docs"},{tag:"h2",title:"The Way to Document a React Component",slug:"the-way-to-document-a-react-component"},{tag:"h2",title:"Design Principles and Features",slug:"design-principles-and-features"},{tag:"h3",title:"Keep Your Source Code Clean",slug:"keep-your-source-code-clean"},{tag:"h3",title:"Extended Markdown",slug:"extended-markdown"},{tag:"h3",title:"Use React Components to Render Pages",slug:"use-react-components-to-render-pages"},{tag:"h3",title:"Static Site Generation",slug:"static-site-generation"},{tag:"h3",title:"Internationalization (i18n)",slug:"internationalization-(i18n)"},{tag:"h3",title:"Search Your Docs",slug:"search-your-docs"}],i=[{index:0,type:"html",html:a},{index:1,type:"code",info:n,code:s},{index:2,type:"html",html:c}],d=({renderer:e})=>e?o(e,{blocks:i,headings:r}):null;d.displayName="DocMarkdownProvider";export{d as default};
