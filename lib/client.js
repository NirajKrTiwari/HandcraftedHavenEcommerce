import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient(
    {
        projectId: "hg26yzeb",
        dataset: "production",
        apiVersion: "2023-02-08",
        useCdn: true,
        token:'sk5quFqmW3V22ELIChHZ4L9pWWURza21m4YMUbK4x2TI5Iotu4DBNl0agfpseUDMxNvzcABNiIByClFk16ZwNhljEnhgcPxmNe55MKj49cjJpO4d8VNqIbNNQrrLIuaYEaZ0hg8Vvvp8Ek0D3jIDJtarUEEO2aX82ho77E3IZRlM7qRYWbuK'
        // token: "skLvtTiNG6UWjLYcn6L25hguutyTlg6NfjNMooJ64ur4404RBAYA8POaZvz8AqMZ3jpEl6fidrfh6wYfghQBL8XvabaQ8mX123gWv8XWcXX0fYjeFkH1hXwxBgVKis3mNzGSNWT7WIxHguHqCkRj0AXM3ytVdiD8JxEr4sfOwnxkdSjOozxR"

    }
)

const builder = ImageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source);