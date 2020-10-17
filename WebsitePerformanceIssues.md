In this document, issues related to the [landing page](https://mylofamily.com/gullack/) and [Product Detail Page](https://mylofamily.com/gullack/product/280) are mentioned.

I have tried to divide the same into below mentioned sections.

- General Issues
- Page Specific Issues
- Other Issues

## General Issues

1. CSS is inline - Should be chunked.
2. Js is split across various files - Files size is too small to be a actual chunk.
3. CSS and src maps are bundled in html itself - Src maps should be disabled in prod
4. Too many assets are loaded in a first load - Assets should be loaded when needed, for small icons and images, image sprites can be used, like for social media icons.
5. Too much work done in main thread - Optimise code, make use of web workers wherever possible.
6. CSS inlined plus also loaded separately.
7. Too many fonts are being loaded - can reduce the number of fonts being used or load only the fonts required for that particular page. We can also add use 'swap' which will show content but with the default font.
8. Poor Lighthouse Audit for performance. 15 for landing page and 18 for product detail page.

![Lighthouse audit for mylo landing page](https://github.com/parichaybatra/product-listing-infinite-scroll/blob/main/screenshots/mylo-landing-page-mobile-performance.png)

![Lighthouse audit for mylo product details page](https://github.com/parichaybatra/product-listing-infinite-scroll/blob/main/screenshots/mylo-product-details-page-mobile-performance.png)

We can improve the lighthouse audit matrix by fixing the above mentioned issues along with the measures mentioned below.

- Analyse and break down Main Thread Work
- Remove Unused JavaScript
- Avoid Costly Multiple Round-Trips to Any Origin
- Try to make all text visible during webfont loads to avoid flash of invisible text.
- Remove unused CSS Rules

## Page Specific Issues

1. Landing page carousel is not working. Images are not loading as the source is not mapped properly. Attaching screenshot for the same.

![carousel images not working](https://github.com/parichaybatra/product-listing-infinite-scroll/blob/main/screenshots/landing-page-no-image.png)

2. Image not loading for section below browse by categories.
   ![Product image not working](https://github.com/parichaybatra/product-listing-infinite-scroll/blob/main/screenshots/section-below-categories.png)

3. In browse by products section, when filters are used, errors are coming in console, will need to check the code for exact problem.

![Errors in console while using filters](https://github.com/parichaybatra/product-listing-infinite-scroll/blob/main/screenshots/console-errors-while-filtering-products)

4. View All Products button should not be there in desktop view, infinite scroll should be there instead, similar to that in mobile view.

5. On Landing page, too many network requests are sent to get assets ~127.

6. In both pages image elements do not have explicit width and height.

7. In product details page, once the user clicks on view all questions, there is no back button to go to the details page the user was on

8. UI of products detail page not optimised for desktop.

## Other Issues

1. Background and foreground colors do not have a sufficient contrast ratio.
2. Links do not have a discernible name - Screen readers issues
3. All images do not have alt attribute.
4. Buttons do not have accessible name which means screen readers announce it as "button", making it unusable for users who rely on screen readers.
5. Low resolution images are used, images dimensions should be proportional to the display size and the pixel ratio to maximize image clarity.
6. Document does not have a meta description.
7. Webp images not working in safari in version 13.1.2
