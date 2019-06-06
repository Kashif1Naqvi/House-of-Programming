export const cssData = {
    users:[
        {
            title:"Cascading Style Sheets            ",
            description:"\"CSS\" redirects here. For other uses, see CSS (disambiguation).\"Pseudo-element\" redirects here. For pseudoelement symbols in chemistry, see Skeletal formula § Pseudoelement symbols.For the use of CSS on Wikipedia, see Help:Cascading Style Sheets.Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.[3] This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.The CSS specifications are maintained by the World Wide Web Consortium (W3C). Internet media type (MIME type) text/css is registered for use with CSS by RFC 2318 (March 1998). The W3C operates a free CSS validation service for CSS documents.In addition to HTML, other markup languages support the use of CSS including XHTML, plain XML, SVG, and XUL.In CSS, selectors declare which part of the markup a style applies to by matching tags and attributes in the markup itself.Selectors may apply to the following:all elements of a specific type, e.g. the second-level headers h2 elements specified by attribute, in particular:id: an identifier unique within the document class: an identifier that can annotate multiple elements in a document elements depending on how they are placed relative to others in the document tree.Classes and IDs are case-sensitive, start with letters, and can include alphanumeric characters, hyphens and underscores. A class may apply to any number of instances of any elements. An ID may only be applied to a single element.Pseudo-classes are used in CSS selectors to permit formatting based on information that is not contained in the document tree. One example of a widely used pseudo-class is :hover, which identifies content only when the user “points to” the visible element, usually by holding the mouse cursor over it. It is appended to a selector as in a:hover or #elementid:hover. A pseudo-class classifies document elements, such as :link or :visited, whereas a pseudo-element makes a selection that may consist of partial elements, such as ::first-line or ::first-letter.Selectors may be combined in many ways to achieve great specificity and flexibility.[7] Multiple selectors may be joined in a spaced list to specify elements by location, element type, id, class, or any combination thereof. The order of the selectors is important. For example, div .myClass {color: red;} applies to all elements of class myClass that are inside div elements, whereas .myClass div {color: red;} applies to all div elements that are in elements of class myClass.\n The following table provides a summary of selector syntax indicating usage and the version of CSS that introduced it",
            table:[
                {
                    id:1,
                    Pattren:"E",
                    Matches:"an element of type E	",
                    f_Css_level:1
                },
                {   id:2,
                    Pattren:"E:link	",
                    Matches:"an E element is the source anchor of a hyperlink of which the target is not yet visited (:link) or already visited (:visited)	",
                    f_Css_level:1
                },
                {   id:3,
                    Pattren:"E:active	",
                    Matches:"an E element during certain user actions	",
                    f_Css_level:1
                },
                {   id:4,
                    Pattren:"E::first-line	",
                    Matches:"the first formatted line of an E element	",
                    f_Css_level:1
                },
                {   id:5,
                    Pattren:"E::first-letter	",
                    Matches:"the first formatted letter of an E element	",
                    f_Css_level:1
                },
                {   id:6,
                    Pattren:".c	",
                    Matches:"all elements with class=\"c\"	",
                    f_Css_level:1
                },
                {   id:7,
                    Pattren:"#myid",
                    Matches:"the element with id=\"myid\"	",
                    f_Css_level:1
                },
                {   id:8,
                    Pattren:"E.warning",
                    Matches:"an E element whose class is \"warning\" (the document language specifies how class is determined)	",
                    f_Css_level:1
                },
                {   id:9,
                    Pattren:"E#myid	",
                    Matches:"an E element with ID equal to \"myid\"	",
                    f_Css_level:1
                },
                {   id:10,
                    Pattren:"E F",
                    Matches:"an F element descendant of an E element	",
                    f_Css_level:1
                },
                {   id:11,
                    Pattren:"*",
                    Matches:"any element	",
                    f_Css_level:2
                },
                {   id:12,
                    Pattren:"E[foo]	",
                    Matches:"an E element with a \"foo\" attribute	",
                    f_Css_level:2
                },
                {   id:13,
                    Pattren:"E[foo=\"bar\"]	",
                    Matches:"an E element whose \"foo\" attribute value is exactly equal to \"bar\"	",
                    f_Css_level:2
                },
                {   id:14,
                    Pattren:"E[foo|=\"en\"]	",
                    Matches:"an E element whose \"foo\" attribute has a hyphen-separated list of values beginning (from the left) with \"en\"	",
                    f_Css_level:2
                },
                {   id:15,
                    Pattren:"E:first-child	",
                    Matches:"an E element, first child of its parent",
                    f_Css_level:2
                },
                {   id:16,
                    Pattren:"E:lang(fr)	",
                    Matches:"an element of type E in language \"fr\" (the document language specifies how language is determined)	",
                    f_Css_level:2
                },
                {   id:17,
                    Pattren:"E::before	",
                    Matches:"generated content before an E element's content	",
                    f_Css_level:2
                },
                {   id:18,
                    Pattren:"E::after	",
                    Matches:"generated content after an E element's content	",
                    f_Css_level:2
                },
                {   id:19,
                    Pattren:"E > F",
                    Matches:"an F element child of an E element",
                    f_Css_level:2
                },
                {   id:20,
                    Pattren:"E + F",
                    Matches:"an F element immediately preceded by an E element	",
                    f_Css_level:2
                },
                {   id:21,
                    Pattren:"E[foo^=\"bar\"]	",
                    Matches:"an E element whose \"foo\" attribute value begins exactly with the string \"bar\"	",
                    f_Css_level:3
                },
                {   id:22,
                    Pattren:"E[foo$=\"bar\"]	",
                    Matches:"an E element whose \"foo\" attribute value ends exactly with the string \"bar\"	",
                    f_Css_level:3
                },
                {   id:23,
                    Pattren:"E[foo*=\"bar\"]	",
                    Matches:"an E element whose \"foo\" attribute value contains the substring \"bar\"	",
                    f_Css_level:3
                },
                {   id:24,
                    Pattren:"E:root	",
                    Matches:"an E element, root of the document	",
                    f_Css_level:3
                },
                {   id:25,
                    Pattren:"E:nth-child(n)	",
                    Matches:"an E element, the n-th child of its parent	",
                    f_Css_level:3
                },
                {   id:26,
                    Pattren:"E:nth-last-child(n)	",
                    Matches:"an E element, the n-th child of its parent, counting from the last one	",
                    f_Css_level:3
                },
                {   id:27,
                    Pattren:"E:nth-of-type(n)	",
                    Matches:"an E element, the n-th sibling of its type	",
                    f_Css_level:3
                },
                {   id:28,
                    Pattren:"E:nth-last-of-type(n)	",
                    Matches:"an E element, the n-th sibling of its type, counting from the last one	",
                    f_Css_level:3
                },
                {   id:29,
                    Pattren:"E:last-child	",
                    Matches:"an E element, last child of its parent	",
                    f_Css_level:3
                },
                {   id:30,
                    Pattren:"E:first-of-type	",
                    Matches:"an E element, first sibling of its type	",
                    f_Css_level:3
                },
                {   id:31,
                    Pattren:"E:last-of-type	",
                    Matches:"an E element, last sibling of its type	",
                    f_Css_level:3
                },
                {   id:32,
                    Pattren:"E:only-child	",
                    Matches:"an E element, only child of its parent	",
                    f_Css_level:3
                },
                {   id:33,
                    Pattren:"E:only-of-type	",
                    Matches:"an E element, only sibling of its type	",
                    f_Css_level:3
                },
                {   id:34,
                    Pattren:"E:empty	",
                    Matches:"an E element that has no children (including text nodes)	",
                    f_Css_level:3
                },
                {   id:35,
                    Pattren:"E:target	",
                    Matches:"an E element being the target of the referring URI	",
                    f_Css_level:3
                },
                {   id:36,
                    Pattren:"E:enabled	",
                    Matches:"a user interface element E that is enabled	",
                    f_Css_level:3
                },
                {   id:37,
                    Pattren:"E:disabled	",
                    Matches:"a user interface element E that is disabled	",
                    f_Css_level:3
                },
                {   id:38,
                    Pattren:"E:checked	",
                    Matches:"a user interface element E that is checked (for instance a radio-button or checkbox)	",
                    f_Css_level:3
                },
                {   id:39,
                    Pattren:"E:not(s)	",
                    Matches:"an E element that does not match simple selector s	",
                    f_Css_level:3
                },
                {   id:40,
                    Pattren:"E ~ F	",
                    Matches:"an F element preceded by an E element	",
                    f_Css_level:3
                },
                
            ]
        },
        {
            title:"Declaration block            ",
            description:"A declaration block consists of a list of declarations in braces. Each declaration itself consists of a property, a colon (:), and a value. If there are multiple declarations in a block, a semi-colon (;) must be inserted to separate each declaration.Properties are specified in the CSS standard. Each property has a set of possible values. Some properties can affect any type of element, and others apply only to particular groups of elements.the sources is CSS information can be provided from various sources. These sources can be the web browser, the user and the author. The information from the author can be further classified into inline, media type, importance, selector specificity, rule order, inheritance and property definition. CSS style information can be in a separate document or it can be embedded into an HTML document. Multiple style sheets can be imported. Different styles can be applied depending on the output device being used; for example, the screen version can be quite different from the printed version, so that authors can tailor the presentation appropriately for each medium.The style sheet with the highest priority controls the content display. Declarations not set in the highest priority source are passed on to a source of lower priority, such as the user agent style. The process is called cascading.One of the goals of CSS is to allow users greater control over presentation. Someone who finds red italic headings difficult to read may apply a different style sheet. Depending on the browser and the web site, a user may choose from various style sheets provided by the designers, or may remove all added styles and view the site using the browser's default styling, or may override just the red italic heading style without altering other attributes.",
            table:[
                {   id:1,
                    Pattren:1,
                    Matches:"Importance	",
                    f_Css_level:"The ‘!important’ annotation overwrites the previous priority types                    ",  
                },
                {   id:2,
                    Pattren:2,
                    Matches:"Inline",
                    f_Css_level:"A style applied to an HTML element via HTML ‘style’ attribute                    ",  
                },
                {   id:3,
                    Pattren:3,
                    Matches:"Media Type	",
                    f_Css_level:"A property definition applies to all media types, unless a media specific CSS is defined                    ",  
                },
                {   id:4,
                    Pattren:4,
                    Matches:"User defined	",
                    f_Css_level:"Most browsers have the accessibility feature: a user defined CSS                    ",  
                },
                {   id:5,
                    Pattren:5,
                    Matches:"Selector specificity	",
                    f_Css_level:"A specific contextual selector (#heading p) overwrites generic definition                    ",  
                },
                {   id:6,
                    Pattren:6,
                    Matches:"Rule order	",
                    f_Css_level:"Last rule declaration has a higher priority                    ",  
                },
                {   id:7,
                    Pattren:7,
                    Matches:"Parent inheritance	",
                    f_Css_level:"If a property is not specified, it is inherited from a parent element                    ",  
                },
                {   id:8,
                    Pattren:8,
                    Matches:"CSS property definition in HTML document",
                    f_Css_level:"CSS rule or CSS inline style overwrites a default browser value                    ",  
                },
                {   id:9,
                    Pattren:9,
                    Matches:"Browser default	",
                    f_Css_level:"The lowest priority: browser default value is determined by W3C initial value specifications                    ",  
                },
            ]
        },
        
    ]
}