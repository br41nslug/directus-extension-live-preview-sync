<template>
</template>

<script setup>
import { inject, onMounted, watch } from 'vue';

const props = defineProps({ debug: Boolean });

onMounted(() => {
	const previewFrame = document.getElementById('frame')?.contentWindow;
	if (!previewFrame) {
		console.warn('[Live Preview Sync] No live preview found on this page!');
		return;
	}
	
	const updateData = (data) => {
		previewFrame.postMessage({
			type: 'directus-preview',
			path: window.location.pathname,
			values: data,
		});
		if (props.debug) {
			console.info('[Live Preview Sync]', {
				type: 'directus-preview',
				path: window.location.pathname,
				values: data,
			});
		}
	}

	const values = inject('values');

	watch(values, (val) => updateData(val));
	updateData(values.value);
});
</script>
