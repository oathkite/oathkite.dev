import { PUBLIC_API_KEY } from '$env/static/public';

export async function load({ fetch, params }) {
    const post = await fetch(`https://oathkite-dev.microcms.io/api/v1/work/${params.slug}`, {
        headers: {
            'X-MICROCMS-API-KEY': PUBLIC_API_KEY,
        }
    });

    if (post) {
        return post.json();
    }
}
