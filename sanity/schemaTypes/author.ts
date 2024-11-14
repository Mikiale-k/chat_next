import { UserIcon } from "lucide-react";
import { defineField,defineType } from "sanity";

/* we got all this form gitAuth*/

export const author = defineType({
    name: "author",
    title: "Aurhor",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: 'id',
            type: 'number',
        }),
        defineField({
            name: 'name',
            type: 'string',
        }),defineField({
            name: 'username',
            type: 'string',
        }),defineField({
            name: 'email',
            type: 'string',
        }),defineField({
            name: 'image',
            type: 'url',
        }),defineField({
            name: 'bio',
            type: 'text',
        }),
    ], 
    preview: {
        select: {
            title: "name",
        },
    },
});