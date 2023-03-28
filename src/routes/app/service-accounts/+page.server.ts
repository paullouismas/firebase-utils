import { readAll } from '$client/services/service-account.service';

import type { PageServerLoad } from './$types';

export const load = (({ fetch }) => {
	const serviceAccounts = readAll(fetch);

	return {
		streamed: {
			serviceAccounts,
		},
	};
}) satisfies PageServerLoad;
