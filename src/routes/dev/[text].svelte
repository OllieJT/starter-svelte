<script lang="ts">
	import { writable } from "svelte/store";

	const isOpen = writable(false);
	const toggle = () => isOpen.update((prev) => !prev);

	$: console.log($isOpen);
</script>

<section>
	<h1>Text Styles</h1>
	<p>
		The HTML markup language is nearly 30 years old and over its lifetime it is grown
		significantly in complexity. However, at the same time web professionals have often
		skipped over learning basic HTML first in favor of immediately exploring design or
		programming frameworks. While such a choice would seem appropriate to get hands on
		experience, skipping markup basics can be limiting resulting in confusion or even. It is
		our hope that by approaching HTML using it is understandable that we would want to get
		things done.
	</p>
	<h3>
		<a href="https://html.spec.whatwg.org/multipage/syntax.html#character-references"
			>Character Entities</a
		>
	</h3>
	<p>
		are &lt; (less than &amp;lt;), &gt; (greater than &amp;gt;, &amp; (ampersand &amp;amp;,
		&copy; (copyright &amp;copy;) and numeric entities like &#9786; (a unicode smile). Many
		many entities exist the main point is to understand the syntax and look up the symbol
		needed.
	</p>

	<h3>
		<a href="https://html.spec.whatwg.org/multipage/sections.html">Sections</a>
	</h3>
	<p>
		The content of the page will be found in the <code>body</code> element.
	</p>
	<p>
		If the content or portion of the content is a stand-alone unit of content as an article
		it should be found within the <code>article</code>
		element. Look at line 35 this document is a complete article. Notice it is found in the
		<code>main</code>
		element as well. There is some degree of confusion around <code>main</code>,
		<code>section</code>
		and
		<code>article</code> in terms of encapsulation so be aware of how you might use them.
	</p>
	<p>
		The <code>section</code> element has been used heavily in the document as is used to
		break up content in chunks. It is a bit more semantic than
		<code>div</code> which is even more generic.
	</p>
	<p>
		Navigation items particular for site or section navigation should be found within a <code
			>nav</code
		>
		element as the "navbar" above demonstrates.
	</p>
	<p>The next element is wonderful for non-linera thinkers lie me.</p>

	<p>
		Headings ranging from <code>h1</code> to <code>h6</code> should be used to outline content.
		The document has been using them agressively, but as a sample here are the headings repeated.
	</p>
</section>

<section>
	<h1>Heading 1</h1>
	<h2>Heading 2</h2>
	<h3>Heading 3</h3>
	<h4>Heading 4</h4>
	<h5>Heading 5</h5>
	<h6>Heading 6</h6>
	<p>
		Headings can be grouped together using the <code>hgroup</code> element to limit the outlining
		function.
	</p>
	<hgroup>
		<h1>Heading</h1>
		<h2>Subheading</h2>
	</hgroup>
	<p>
		The headings above are treated as a single unit while the headings below are treated as
		two units.
	</p>
	<h1>Heading</h1>
	<h2>Subheading</h2>

	<p>
		When creating sections you may wish to specify the <code>header</code>
		and <code>footer</code>. This sectioning elements can appear for the whole document or
		individually within sections.
	</p>

	<p>
		A special section element <code>address</code>is often
		<a href="#address_element">found at the bottom of the document</a> that sets the contact
		information or address of the organization responsible for the document.
	</p>
</section>

<section>
	<h3>
		<a href="https://html.spec.whatwg.org/multipage/grouping-content.html"
			>Grouping Content</a
		>
	</h3>
	<p>
		A variety of content grouping elements are found in HTML. The most commonly used is the
		generic
		<code>div</code> element. A more meaningful element <code>p</code> is used to deliinate
		<a href="#.">go to foo</a>paragraphs.
	</p>

	<p id="foo">
		When breaking apart sections we may wish to employ the void element <code>hr</code> to insert
		a horizontal rule like so.
	</p>
	<hr />
	<p>
		A <code>blockquote</code> element is useful to to quote large amounts of content. A
		smaller quotation should be placed inline using a
		<code>q</code> element.
	</p>

	<blockquote>
		Far out in the uncharted backwaters of the unfashionable end of the Western Spiral arm
		of the Galaxy lies a small unregarded yellow sun.
		<cite>The <a id="word3">Hitchhiker</a>'s Guide to the Galaxy, Douglas Adams</cite>
	</blockquote>

	<p>
		HTML supports a variety of list elements including both unordered (<code>ul</code>) and
		ordered (<code>ol</code>) lists. In either list case individual items are specificed
		using the list item (<code>li</code>) element. A specialized definition list is often
		used in glossary style lists and uses the
		<code>dt</code>
		(definition term) and <code>dd</code>
		(definition) within a <code>dl</code>
		definition list.
	</p>

	<ul>
		<li>
			Unordered 1
			<ol>
				<li>Ordered 1</li>
				<li>Ordered 2</li>
			</ol>
		</li>
		<li>Unordered 3</li>
		<li>Unordered 4</li>
	</ul>

	<dl>
		<dt>Dingus</dt>
		<dd>A fake word for a gadget or doo-dad.</dd>
		<dt>Widget</dt>
		<dd>A fake word like a dingus or gadget</dd>
	</dl>

	<p>
		A specialized <code>menu</code> element is supposed to be employed when the items are interactive
		as shown here.
	</p>
	<menu>
		<li><button onclick={() => alert("New document")}>New</button></li>
		<li><button onclick={() => alert("Open document")}>Open</button></li>
		<li><button onclick={() => alert("Quit")}>Quit</button></li>
	</menu>

	<p>
		When source code or other preformatted content should be include and white space should
		be preserved use the <code>pre</code> tag
	</p>
	<pre>
					let school = 'UCSD';

					/**
					 * helloJSWorld - the prototypical example complete with opinoniated mistakes!
					 */
					function helloJSWorld()

					/* helloJSWorld */

					helloJSWorld();
				</pre>

	<p>A figure is a semantic way to insert something like a chart or picture.</p>
	<figure>
		<img
			src="./images/chart.png"
			alt="Scatter showing distributions of HTML elements with a long tail double peek around 300 and 400"
		/>
		<p>
			Source:<cite
				><a href="https://almanac.httparchive.org/en/2019/markup">Web Almanac</a></cite
			>
		</p>
		<figcaption>HTML Element frequencies circa 2019</figcaption>
	</figure>
</section>

<section>
	<h3>Text Level Elements</h3>
	<p>
		There are <a href="https://html.spec.whatwg.org/multipage/text-level-semantics.html"
			>many inline text elements</a
		>. Things get a little iffy here for HTML novices because the default renderings can
		encourage you to think presentationally as opposed to semantically. Resist the pull to
		the dark side of markup and keep things logical applying look later with CSS!
	</p>

	<br />

	<p>
		&lt;em&gt; -<em>Emphasis</em><br />
		&lt;strong&gt; - <strong>Strong</strong><br />
		&lt;small&gt; - <small>Small</small><br />
		&lt;s&gt; - <s>Strike</s> is or isn't suggested, careful with it<br />
		&lt;cite&gt; - <cite>Citation</cite><br />
		&lt;q&gt; - <q>Quote</q><br />
		&lt;dfn&gt; - Pedantic - <dfn>needless display of knowledge</dfn> <br />
		&lt;abbr&gt; - <abbr>UCSD</abbr> is an abbreviation of University of California, San
		Diego<br />
		&lt;ruby&gt; -
		<ruby
			>Ruby<rp>(</rp>
			<rt>Ruby Text</rt>
			<rp>)</rp>
		</ruby><br />
		&lt;data&gt; -
		<data value="111234.0345">111234</data><!-- this could be useful!? --><br />
		&lt;time&gt; -
		<time datetime="2019-12-12">Thu, 12 Dec 2019 19:24:33 +0000</time><br />
		&lt;code&gt; -
		<code>code</code><!-- this is often used with tech content --><br />
		&lt;var&gt; - <var>Variable</var><br />
		&lt;samp&gt; - <samp>Sample</samp><br />
		&lt;kbd&gt; - <kbd>Keyboard</kbd><br />
		&lt;sub&gt; - <sub>Subscript</sub><br />
		&lt;sup&gt; - <sup>Superscript</sup><br />
		<!-- careful with these they are often discouraged -->
		&lt;i&gt; - <i>Italic</i><br />
		&lt;b&gt; - <b>Bold</b><br />
		&lt;u&gt; - <u>Underline</u><br />
		&lt;mark&gt; - <mark>Mark</mark><br />
		&lt;bdi&gt; - TODO: the bdi element<br />
		&lt;bdo&gt; - TODO: the bdo element<br />
		&lt;span&gt; - <span>spaned text in here</span><br />
		&lt;br&gt; - Line break ahead!<br />
		&lt;a&gt; - Some <a href="#.">link</a> text<br />
	</p>
	<br />

	<p>
		Sometimes you want a line break and sometimes you don't. Why not insert an element to
		tell the browser where you are ok breaking within_some_<wbr
		/>very_long_bit_of_unbreakable_text_that_is_way_too_<wbr
		/>_and_should_not_be_used_as_it_is_getting_totally_out_of_control!
	</p>
</section>

<section>
	<h3>Embedded Content</h3>
	<p>
		<a href="https://html.spec.whatwg.org/multipage/embedded-content.html">specification</a>
		<!-- picture, source and image -->
		<a href="https://html.spec.whatwg.org/multipage/images.html"
			>More information on images</a
		>

		<!-- TODO: add more interesting image and picture examples to demonstrate types and source sets this can come with the image content shortly -->

		<a href="https://html.spec.whatwg.org/multipage/iframe-embed-object.html"
			>Iframe, Embed, Object specification</a
		>
	</p>
	<!-- TODO: add more for iframes, embed, object, and param-->
	<iframe title="Test IFrame" src="https://www.ucsd.edu" height="400" width="200" />
</section>

<section>
	<hgroup>
		<h3>Interaction is Coming</h3>
		<h4>
			Framework based, custom-elements, or plain old HTML declarative widgets will rule
			the 2020s
		</h4>
	</hgroup>
	<p>
		HTML 5 started a trend with richer form fields and a <a
			href="https://html.spec.whatwg.org/multipage/interactive-elements.html#interactive-elements"
			>few interactive elements</a
		>
		but likely we will see most UI widgets move away from a collection of &lt;div&gt;tags and
		scripts to more obvious declaritive elements. The specification already supports
		<a href="https://html.spec.whatwg.org/multipage/custom-elements.html#custom-elements"
			>custom elements</a
		> so we can do this easily enough even without a framework.
	</p>
	<h4>Details Demo</h4>
	<details>
		<summary>Click to see important details</summary>
		<ul>
			<li>Important detail</li>
			<li>Other important detail</li>
			<li><em>Most</em> important detail</li>
		</ul>
	</details>

	<h4>Dialog Demo</h4>
	<dialog id="quoteDialog" open={$isOpen}>
		<p>
			Be conservative in what you do, be liberal in what you accept from others - <cite
				>Postel's Law</cite
			>
		</p>
		<button on:click={toggle}>Close</button>
	</dialog>
	<button on:click={toggle}>Open Dialog</button>
</section>
