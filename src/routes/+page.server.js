import { API_KEY } from '$env/static/private';

export async function load({ fetch }) {
    const post = await fetch(`https://oathkite-dev.microcms.io/api/v1/work`, {
        headers: {
            'X-MICROCMS-API-KEY': API_KEY,
        }
    });

    if (post) {
        return post.json();
    }
}
