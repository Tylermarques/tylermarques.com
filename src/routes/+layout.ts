
import posthog from 'posthog-js';
import { browser } from '$app/environment';
export const load = async () => {
  if (browser) {
    posthog.init('phc_mL4nzd4qTYul5CI5Z2YnvYxWfV9fDLlkbhDQQAUVitx', {
      api_host: 'https://us.i.posthog.com',
      person_profiles: 'identified_only' // or 'always' to create profiles for anonymous users as well
    });
  }
  return;
};
