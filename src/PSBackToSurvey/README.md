### PSBackToSurvey

There are users that receive a preview link with the creative so they can see the placement
to be test, then check what is the experience with that creative and after test, the user must go back to continue with the marketing survey.
 
> The purpose of this plugin script is to render a button below the creative to let those users 
> that comes from a survey return and continue with they survey.

### How it works?
The plugin is auto initialized when the script is included in the page. You just have to set the `URL` with the placeholders that must be used to redirect the user.

### Install
```html
<!-- Basic template to install the script -->
<!-- <cdn> Replace with the CDN URL of the plugin -->
<!-- data-target is where you put your target URL -->
<script
  id="PSBackToSurvey"
  type="module"
  src="<cdn>/ps_snippets/dist/PSBackToSurvey.min.js"
  data-target="https://example.org?foo={foo_id}&var={var_id}"
></script>

```
>### Important
> The plugin use `Query String` values to replace the placeholders used within a URL.
>
> #### Example Script:
> ```html
>  <script
>   id="PSBackToSurvey"
>   type="module"
>   src="<cdn>/ps_snippets/dist/PSBackToSurvey.min.js"
>   data-target="https://example.com?bar={foo_id}"
>  ></script>
> ```
> ##### Example `URL` where is rendered the script:
> ```text
>  http://tools.padsquad.com/preview/?foo_id=20
>  ```
> In the above example the plugin will **try to find in the query string** a variable named `foo_id` (`?foo_id=20`), then use its value to replace any placeholder with the same name in the provided `data-target` property.
> #### Final result
> The user will be prompted to the new URL:
> ```text
>  https://example.com?bar=20
> ```
