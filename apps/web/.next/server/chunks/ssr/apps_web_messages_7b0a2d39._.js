module.exports = [
"[project]/apps/web/messages/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/apps_web_messages_en_json_f42eb7f6._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/apps/web/messages/en.json (json)");
    });
});
}),
"[project]/apps/web/messages/ko.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/apps_web_messages_ko_json_db4ffd17._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/apps/web/messages/ko.json (json)");
    });
});
}),
];