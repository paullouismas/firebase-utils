import { error, type Cookies } from '@sveltejs/kit';

import { readOne } from '$server/services/service-account.service';

// TODO: this file should be migrated under the $server folder

export async function getServiceAccountFromCookies(cookies: Cookies) {
	const serviceAccountId = cookies.get('serviceAccountId') ?? null;

	if (!serviceAccountId) {
		throw error(401, {
			message: 'Unauthorized',
		});
	}

	const serviceAccount = await readOne(serviceAccountId);

	if (!serviceAccount) {
		throw error(404, {
			message: 'Service account not found',
		});
	}

	return serviceAccount;
}
