import InterfaceComponent from './interface.vue';

export default {
	id: 'live-preview-sync',
	name: 'Live Preview Sync',
	description: 'Live Preview form value synchronization using iframe.postMessage',
	component: InterfaceComponent,
	types: ['alias'],
	localTypes: ['presentation'],
	group: 'presentation',
	options: [
		{
			field: 'debug',
			name: 'Debug Logs',
			type: 'boolean',
			meta: {
				width: 'half',
				interface: 'boolean',
				options: {
					label: 'Debug Logs',
				},
			},
			schema: {
				default_value: false,
			},
		},
	],
	autoKey: true,
	hideLabel: true,
};