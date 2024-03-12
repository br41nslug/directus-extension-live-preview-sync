# Directus Live Preview Sync

An interface to push realtime updates to the live preview iframe.

> Tested with Directus 10.10.4

## Usage

This extension pushes live value updates to the live preview iframe.

**Example Code:** [example endpoint](example/directus-extension-example-preview/src/index.js)

Requirements:

1. Set the Live Preview URL
   ![Set the Live Preview URL](https://raw.githubusercontent.com/br41nslug/directus-extension-live-preview-sync/main/example/images/set_live_preview_url.png)
2. Add the Live Preview Sync interface
   ![Add Live Preview Sync interface](https://raw.githubusercontent.com/br41nslug/directus-extension-live-preview-sync/main/example/images/add_interface.png)

#### Message Structure

```json
{
  "type": "directus-preview",
  "path": "/admin/content/<collection>/<id>",
  "values": <form-values>,
}
```

### Updating the Preview Page

For this to work the live preview page needs to be listening for the events.
On the preview page add code with the following bootstrap:
```js
window.addEventListener("message", (event) => {
    const { type, path, values } = event.data;
    if (type === 'directus-preview') {
        // do something creative
    }
}, false);
```

## Examples

**Included Example**
![Example Demo](https://raw.githubusercontent.com/br41nslug/directus-extension-live-preview-sync/main/example/images/demo_example.gif)

**Random Map Example**
![Dynamic Map Demo](https://raw.githubusercontent.com/br41nslug/directus-extension-live-preview-sync/main/example/images/dynamic_map_example.gif)
