// This helper automatically types middleware params
import { defineMiddleware } from "astro:middleware";
 
export const onRequest = defineMiddleware(({ locals }, next) => {
    // intercept data from a request
    // optionally, modify the properties in `locals`
    locals.title = "New TS title";
 
    // return a Response or the result of calling `next()`
    return next();
});