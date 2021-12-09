/* eslint-disable */

import { AllTypesProps, ReturnTypes } from './const';
type ZEUS_INTERFACES = GraphQLTypes["Node"] | GraphQLTypes["ContentNode"] | GraphQLTypes["UniformResourceIdentifiable"] | GraphQLTypes["Commenter"] | GraphQLTypes["DatabaseIdentifier"] | GraphQLTypes["EnqueuedAsset"] | GraphQLTypes["NodeWithTemplate"] | GraphQLTypes["ContentTemplate"] | GraphQLTypes["NodeWithTitle"] | GraphQLTypes["NodeWithAuthor"] | GraphQLTypes["NodeWithComments"] | GraphQLTypes["HierarchicalContentNode"] | GraphQLTypes["NodeWithContentEditor"] | GraphQLTypes["NodeWithFeaturedImage"] | GraphQLTypes["NodeWithRevisions"] | GraphQLTypes["NodeWithPageAttributes"] | GraphQLTypes["MenuItemLinkable"] | GraphQLTypes["NodeWithExcerpt"] | GraphQLTypes["NodeWithTrackbacks"] | GraphQLTypes["TermNode"] | GraphQLTypes["HierarchicalTermNode"]
type ZEUS_UNIONS = GraphQLTypes["ContentRevisionUnion"] | GraphQLTypes["MenuItemObjectUnion"]

export type ValueTypes = {
    /** The root entry point into the Graph */
["RootQuery"]: AliasType<{
	/** Entry point to get all settings for the site */
	allSettings?:ValueTypes["Settings"],
badge?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["BadgeIdType"] | null,	/** Whether to return the node as a preview instance */
	asPreview?:boolean | null},ValueTypes["Badge"]],
badgeBy?: [{	/** Get the object by its global ID */
	id?:string | null,	/** Get the badge by its database ID */
	badgeId?:number | null,	/** Get the badge by its uri */
	uri?:string | null,	/** Get the badge by its slug (only available for non-hierarchical types) */
	slug?:string | null},ValueTypes["Badge"]],
badges?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToBadgeConnectionWhereArgs"] | null},ValueTypes["RootQueryToBadgeConnection"]],
categories?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToCategoryConnectionWhereArgs"] | null},ValueTypes["RootQueryToCategoryConnection"]],
category?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["CategoryIdType"] | null},ValueTypes["Category"]],
comment?: [{	/** Unique identifier for the comment node. */
	id:string},ValueTypes["Comment"]],
comments?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToCommentConnectionWhereArgs"] | null},ValueTypes["RootQueryToCommentConnection"]],
contentNode?: [{	/** Unique identifier for the content node. */
	id:string,	/** Type of unique identifier to fetch a content node by. Default is Global ID */
	idType?:ValueTypes["ContentNodeIdTypeEnum"] | null,	/** The content type the node is used for. Required when idType is set to "name" or "slug" */
	contentType?:ValueTypes["ContentTypeEnum"] | null,	/** Whether to return the node as a preview instance */
	asPreview?:boolean | null},ValueTypes["ContentNode"]],
contentNodes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToContentNodeConnectionWhereArgs"] | null},ValueTypes["RootQueryToContentNodeConnection"]],
contentType?: [{	/** Unique Identifier for the Content Type node. */
	id:string,	/** Type of unique identifier to fetch a content type by. Default is Global ID */
	idType?:ValueTypes["ContentTypeIdTypeEnum"] | null},ValueTypes["ContentType"]],
contentTypes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["RootQueryToContentTypeConnection"]],
	/** Fields of the &#039;DiscussionSettings&#039; settings group */
	discussionSettings?:ValueTypes["DiscussionSettings"],
	/** Fields of the &#039;GeneralSettings&#039; settings group */
	generalSettings?:ValueTypes["GeneralSettings"],
hero?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["HeroIdType"] | null,	/** Whether to return the node as a preview instance */
	asPreview?:boolean | null},ValueTypes["Hero"]],
heroBy?: [{	/** Get the object by its global ID */
	id?:string | null,	/** Get the hero by its database ID */
	heroId?:number | null,	/** Get the hero by its uri */
	uri?:string | null,	/** Get the hero by its slug (only available for non-hierarchical types) */
	slug?:string | null},ValueTypes["Hero"]],
heroes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToHeroConnectionWhereArgs"] | null},ValueTypes["RootQueryToHeroConnection"]],
mediaItem?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["MediaItemIdType"] | null,	/** Whether to return the node as a preview instance */
	asPreview?:boolean | null},ValueTypes["MediaItem"]],
mediaItemBy?: [{	/** Get the object by its global ID */
	id?:string | null,	/** Get the mediaItem by its database ID */
	mediaItemId?:number | null,	/** Get the mediaItem by its uri */
	uri?:string | null,	/** Get the mediaItem by its slug (only available for non-hierarchical types) */
	slug?:string | null},ValueTypes["MediaItem"]],
mediaItems?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToMediaItemConnectionWhereArgs"] | null},ValueTypes["RootQueryToMediaItemConnection"]],
menu?: [{	/** The globally unique identifier of the menu. */
	id:string,	/** Type of unique identifier to fetch a menu by. Default is Global ID */
	idType?:ValueTypes["MenuNodeIdTypeEnum"] | null},ValueTypes["Menu"]],
menuItem?: [{	/** The globally unique identifier of the menu item. */
	id:string,	/** Type of unique identifier to fetch a menu item by. Default is Global ID */
	idType?:ValueTypes["MenuItemNodeIdTypeEnum"] | null},ValueTypes["MenuItem"]],
menuItems?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToMenuItemConnectionWhereArgs"] | null},ValueTypes["RootQueryToMenuItemConnection"]],
menus?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToMenuConnectionWhereArgs"] | null},ValueTypes["RootQueryToMenuConnection"]],
movie?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["MovieIdType"] | null,	/** Whether to return the node as a preview instance */
	asPreview?:boolean | null},ValueTypes["Movie"]],
movieBy?: [{	/** Get the object by its global ID */
	id?:string | null,	/** Get the Movie by its database ID */
	movieId?:number | null,	/** Get the Movie by its uri */
	uri?:string | null,	/** Get the Movie by its slug (only available for non-hierarchical types) */
	slug?:string | null},ValueTypes["Movie"]],
movies?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToMovieConnectionWhereArgs"] | null},ValueTypes["RootQueryToMovieConnection"]],
node?: [{	/** The unique identifier of the node */
	id?:string | null},ValueTypes["Node"]],
nodeByUri?: [{	/** Unique Resource Identifier in the form of a path or permalink for a node. Ex: "/hello-world" */
	uri:string},ValueTypes["UniformResourceIdentifiable"]],
page?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["PageIdType"] | null,	/** Whether to return the node as a preview instance */
	asPreview?:boolean | null},ValueTypes["Page"]],
pageBy?: [{	/** Get the object by its global ID */
	id?:string | null,	/** Get the page by its database ID */
	pageId?:number | null,	/** Get the page by its uri */
	uri?:string | null},ValueTypes["Page"]],
pages?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToPageConnectionWhereArgs"] | null},ValueTypes["RootQueryToPageConnection"]],
plugin?: [{	/** The globally unique identifier of the plugin. */
	id:string},ValueTypes["Plugin"]],
plugins?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["RootQueryToPluginConnection"]],
post?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["PostIdType"] | null,	/** Whether to return the node as a preview instance */
	asPreview?:boolean | null},ValueTypes["Post"]],
postBy?: [{	/** Get the object by its global ID */
	id?:string | null,	/** Get the post by its database ID */
	postId?:number | null,	/** Get the post by its uri */
	uri?:string | null,	/** Get the post by its slug (only available for non-hierarchical types) */
	slug?:string | null},ValueTypes["Post"]],
postFormat?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["PostFormatIdType"] | null},ValueTypes["PostFormat"]],
postFormats?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToPostFormatConnectionWhereArgs"] | null},ValueTypes["RootQueryToPostFormatConnection"]],
posts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToPostConnectionWhereArgs"] | null},ValueTypes["RootQueryToPostConnection"]],
	/** Fields of the &#039;ReadingSettings&#039; settings group */
	readingSettings?:ValueTypes["ReadingSettings"],
registeredScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["RootQueryToEnqueuedScriptConnection"]],
registeredStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["RootQueryToEnqueuedStylesheetConnection"]],
revisions?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToContentRevisionUnionConnectionWhereArgs"] | null},ValueTypes["RootQueryToContentRevisionUnionConnection"]],
tag?: [{	/** The globally unique identifier of the object. */
	id:string,	/** Type of unique identifier to fetch by. Default is Global ID */
	idType?:ValueTypes["TagIdType"] | null},ValueTypes["Tag"]],
tags?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToTagConnectionWhereArgs"] | null},ValueTypes["RootQueryToTagConnection"]],
taxonomies?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["RootQueryToTaxonomyConnection"]],
taxonomy?: [{	/** Unique Identifier for the Taxonomy node. */
	id:string,	/** Type of unique identifier to fetch a taxonomy by. Default is Global ID */
	idType?:ValueTypes["TaxonomyIdTypeEnum"] | null},ValueTypes["Taxonomy"]],
termNode?: [{	/** Unique identifier for the term node. */
	id:string,	/** Type of unique identifier to fetch a term node by. Default is Global ID */
	idType?:ValueTypes["TermNodeIdTypeEnum"] | null,	/** The taxonomy of the tern node. Required when idType is set to "name" or "slug" */
	taxonomy?:ValueTypes["TaxonomyEnum"] | null},ValueTypes["TermNode"]],
terms?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToTermNodeConnectionWhereArgs"] | null},ValueTypes["RootQueryToTermNodeConnection"]],
theme?: [{	/** The globally unique identifier of the theme. */
	id:string},ValueTypes["Theme"]],
themes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["RootQueryToThemeConnection"]],
user?: [{	/** The globally unique identifier of the user. */
	id:string,	/** Type of unique identifier to fetch a user by. Default is Global ID */
	idType?:ValueTypes["UserNodeIdTypeEnum"] | null},ValueTypes["User"]],
userRole?: [{	/** The globally unique identifier of the user object. */
	id:string},ValueTypes["UserRole"]],
userRoles?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["RootQueryToUserRoleConnection"]],
users?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["RootQueryToUserConnectionWhereArgs"] | null},ValueTypes["RootQueryToUserConnection"]],
	/** Returns the current user */
	viewer?:ValueTypes["User"],
	/** Fields of the &#039;WritingSettings&#039; settings group */
	writingSettings?:ValueTypes["WritingSettings"],
		__typename?: boolean
}>;
	/** All of the registered settings */
["Settings"]: AliasType<{
	/** Settings of the the string Settings Group */
	discussionSettingsDefaultCommentStatus?:boolean,
	/** Settings of the the string Settings Group */
	discussionSettingsDefaultPingStatus?:boolean,
	/** Settings of the the string Settings Group */
	generalSettingsDateFormat?:boolean,
	/** Settings of the the string Settings Group */
	generalSettingsDescription?:boolean,
	/** Settings of the the string Settings Group */
	generalSettingsEmail?:boolean,
	/** Settings of the the string Settings Group */
	generalSettingsLanguage?:boolean,
	/** Settings of the the integer Settings Group */
	generalSettingsStartOfWeek?:boolean,
	/** Settings of the the string Settings Group */
	generalSettingsTimeFormat?:boolean,
	/** Settings of the the string Settings Group */
	generalSettingsTimezone?:boolean,
	/** Settings of the the string Settings Group */
	generalSettingsTitle?:boolean,
	/** Settings of the the string Settings Group */
	generalSettingsUrl?:boolean,
	/** Settings of the the integer Settings Group */
	readingSettingsPostsPerPage?:boolean,
	/** Settings of the the integer Settings Group */
	writingSettingsDefaultCategory?:boolean,
	/** Settings of the the string Settings Group */
	writingSettingsDefaultPostFormat?:boolean,
	/** Settings of the the boolean Settings Group */
	writingSettingsUseSmilies?:boolean,
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["BadgeIdType"]:BadgeIdType;
	/** The badge type */
["Badge"]: AliasType<{
	/** Connection between the NodeWithAuthor type and the User type */
	author?:ValueTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:boolean,
	/** The globally unique identifier of the author of the node */
	authorId?:boolean,
	/** The id field matches the WP_Post-&gt;ID field. */
	badgeId?:boolean,
	conditionalTags?:ValueTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ValueTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId?:boolean,
	/** Post publishing date. */
	date?:boolean,
	/** The publishing date set in GMT. */
	dateGmt?:boolean,
	description?:boolean,
	/** The desired slug of the post */
	desiredSlug?:boolean,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ValueTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedStylesheetConnection"]],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:boolean,
heroes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["BadgeToHeroConnection"]],
	/** The globally unique identifier of the badge object. */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ValueTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:boolean,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:boolean,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:boolean,
	name?:boolean,
	/** Connection between the badge type and the badge type */
	preview?:ValueTypes["BadgeToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:boolean,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:boolean,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:boolean,
	/** The current status of the object */
	status?:boolean,
	/** The template assigned to the node */
	template?:ValueTypes["ContentTemplate"],
	templates?:boolean,
	tier?:boolean,
title?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** An object with an ID */
["Node"]:AliasType<{
		/** The globally unique ID for the object */
	id?:boolean;
		['...on Badge']?: Omit<ValueTypes["Badge"],keyof ValueTypes["Node"]>;
		['...on ContentNode']?: Omit<ValueTypes["ContentNode"],keyof ValueTypes["Node"]>;
		['...on ContentType']?: Omit<ValueTypes["ContentType"],keyof ValueTypes["Node"]>;
		['...on Taxonomy']?: Omit<ValueTypes["Taxonomy"],keyof ValueTypes["Node"]>;
		['...on User']?: Omit<ValueTypes["User"],keyof ValueTypes["Node"]>;
		['...on Comment']?: Omit<ValueTypes["Comment"],keyof ValueTypes["Node"]>;
		['...on EnqueuedScript']?: Omit<ValueTypes["EnqueuedScript"],keyof ValueTypes["Node"]>;
		['...on EnqueuedStylesheet']?: Omit<ValueTypes["EnqueuedStylesheet"],keyof ValueTypes["Node"]>;
		['...on Hero']?: Omit<ValueTypes["Hero"],keyof ValueTypes["Node"]>;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["Node"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["Node"]>;
		['...on NodeWithFeaturedImage']?: Omit<ValueTypes["NodeWithFeaturedImage"],keyof ValueTypes["Node"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["Node"]>;
		['...on Category']?: Omit<ValueTypes["Category"],keyof ValueTypes["Node"]>;
		['...on TermNode']?: Omit<ValueTypes["TermNode"],keyof ValueTypes["Node"]>;
		['...on PostFormat']?: Omit<ValueTypes["PostFormat"],keyof ValueTypes["Node"]>;
		['...on Tag']?: Omit<ValueTypes["Tag"],keyof ValueTypes["Node"]>;
		['...on UserRole']?: Omit<ValueTypes["UserRole"],keyof ValueTypes["Node"]>;
		['...on Menu']?: Omit<ValueTypes["Menu"],keyof ValueTypes["Node"]>;
		['...on MenuItem']?: Omit<ValueTypes["MenuItem"],keyof ValueTypes["Node"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["Node"]>;
		['...on Plugin']?: Omit<ValueTypes["Plugin"],keyof ValueTypes["Node"]>;
		['...on Theme']?: Omit<ValueTypes["Theme"],keyof ValueTypes["Node"]>;
		['...on CommentAuthor']?: Omit<ValueTypes["CommentAuthor"],keyof ValueTypes["Node"]>;
		__typename?: boolean
}>;
	/** Nodes used to manage content */
["ContentNode"]:AliasType<{
		conditionalTags?:ValueTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ValueTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The ID of the node in the database. */
	databaseId?:boolean,
	/** Post publishing date. */
	date?:boolean,
	/** The publishing date set in GMT. */
	dateGmt?:boolean,
	/** The desired slug of the post */
	desiredSlug?:boolean,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ValueTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedStylesheetConnection"]],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:boolean,
	/** The unique resource identifier path */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ValueTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:boolean,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:boolean,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:boolean,
	/** The database id of the preview node */
	previewRevisionDatabaseId?:boolean,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:boolean,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:boolean,
	/** The current status of the object */
	status?:boolean,
	/** The template assigned to a node of content */
	template?:ValueTypes["ContentTemplate"],
	templates?:boolean,
	/** The unique resource identifier path */
	uri?:boolean;
		['...on Badge']?: Omit<ValueTypes["Badge"],keyof ValueTypes["ContentNode"]>;
		['...on Hero']?: Omit<ValueTypes["Hero"],keyof ValueTypes["ContentNode"]>;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["ContentNode"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["ContentNode"]>;
		['...on NodeWithFeaturedImage']?: Omit<ValueTypes["NodeWithFeaturedImage"],keyof ValueTypes["ContentNode"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["ContentNode"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["ContentNode"]>;
		__typename?: boolean
}>;
	/** Any node that has a URI */
["UniformResourceIdentifiable"]:AliasType<{
		conditionalTags?:ValueTypes["ConditionalTags"],
	/** The unique resource identifier path */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	templates?:boolean,
	/** The unique resource identifier path */
	uri?:boolean;
		['...on Badge']?: Omit<ValueTypes["Badge"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on ContentNode']?: Omit<ValueTypes["ContentNode"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on ContentType']?: Omit<ValueTypes["ContentType"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on User']?: Omit<ValueTypes["User"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on Hero']?: Omit<ValueTypes["Hero"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on NodeWithFeaturedImage']?: Omit<ValueTypes["NodeWithFeaturedImage"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on Category']?: Omit<ValueTypes["Category"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on TermNode']?: Omit<ValueTypes["TermNode"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on PostFormat']?: Omit<ValueTypes["PostFormat"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on Tag']?: Omit<ValueTypes["Tag"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["UniformResourceIdentifiable"]>;
		__typename?: boolean
}>;
	/** GraphQL representation of WordPress Conditional Tags. */
["ConditionalTags"]: AliasType<{
	/** Determines whether the query is for an existing archive page. */
	isArchive?:boolean,
	/** Determines whether the query is for an existing attachment page. */
	isAttachment?:boolean,
	/** Determines whether the query is for an existing author archive page. */
	isAuthor?:boolean,
	/** Determines whether the query is for an existing category archive page. */
	isCategory?:boolean,
	/** Determines whether the query is for an existing date archive. */
	isDate?:boolean,
	/** Determines whether the query is for an existing day archive. */
	isDay?:boolean,
	/** Determines whether the query is for the front page of the site. */
	isFrontPage?:boolean,
	/** Determines whether the query is for the blog homepage. */
	isHome?:boolean,
	/** Determines whether the query is for an existing month archive. */
	isMonth?:boolean,
	/** Determines whether this site has more than one author. */
	isMultiAuthor?:boolean,
	/** Determines whether the query is for an existing single page. */
	isPage?:boolean,
	/** Determines whether currently in a page template. */
	isPageTemplate?:boolean,
	/** Determines whether the query is for an existing post type archive page. */
	isPostTypeArchive?:boolean,
	/** Determines whether the query is for a post or page preview. */
	isPreview?:boolean,
	/** Determines whether the query is for the Privacy Policy page. */
	isPrivacyPolicy?:boolean,
	/** Determines whether the query is for a search. */
	isSearch?:boolean,
	/** Determines whether the query is for an existing single post. */
	isSingle?:boolean,
	/** Determines whether the query is for an existing single post of any post type (post, attachment, page, custom post types). */
	isSingular?:boolean,
	/** Determines whether a post is sticky. */
	isSticky?:boolean,
	/** Determines whether the query is for an existing tag archive page. */
	isTag?:boolean,
	/** Determines whether the query is for an existing custom taxonomy archive page. */
	isTax?:boolean,
	/** Determines whether the query is for an existing year archive. */
	isYear?:boolean,
		__typename?: boolean
}>;
	/** Connection between the ContentNode type and the ContentType type */
["ContentNodeToContentTypeConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["ContentType"],
		__typename?: boolean
}>;
	/** An Post Type object */
["ContentType"]: AliasType<{
	/** Whether this content type should can be exported. */
	canExport?:boolean,
	conditionalTags?:ValueTypes["ConditionalTags"],
connectedTaxonomies?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentTypeToTaxonomyConnection"]],
contentNodes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["ContentTypeToContentNodeConnectionWhereArgs"] | null},ValueTypes["ContentTypeToContentNodeConnection"]],
	/** Whether content of this type should be deleted when the author of it is deleted from the system. */
	deleteWithUser?:boolean,
	/** Description of the content type. */
	description?:boolean,
	/** Whether to exclude nodes of this content type from front end search results. */
	excludeFromSearch?:boolean,
	/** The plural name of the content type within the GraphQL Schema. */
	graphqlPluralName?:boolean,
	/** The singular name of the content type within the GraphQL Schema. */
	graphqlSingleName?:boolean,
	/** Whether this content type should have archives. Content archives are generated by type and by date. */
	hasArchive?:boolean,
	/** Whether the content type is hierarchical, for example pages. */
	hierarchical?:boolean,
	/** The globally unique identifier of the post-type object. */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether this page is set to the static front page. */
	isFrontPage?:boolean,
	/** Whether this page is set to the blog posts page. */
	isPostsPage?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** Display name of the content type. */
	label?:boolean,
	/** Details about the content type labels. */
	labels?:ValueTypes["PostTypeLabelDetails"],
	/** The name of the icon file to display as a menu icon. */
	menuIcon?:boolean,
	/** The position of this post type in the menu. Only applies if show_in_menu is true. */
	menuPosition?:boolean,
	/** The internal name of the post type. This should not be used for display purposes. */
	name?:boolean,
	/** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
	public?:boolean,
	/** Whether queries can be performed on the front end for the content type as part of parse_request(). */
	publiclyQueryable?:boolean,
	/** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
	restBase?:boolean,
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass?:boolean,
	/** Makes this content type available via the admin bar. */
	showInAdminBar?:boolean,
	/** Whether to add the content type to the GraphQL Schema. */
	showInGraphql?:boolean,
	/** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
	showInMenu?:boolean,
	/** Makes this content type available for selection in navigation menus. */
	showInNavMenus?:boolean,
	/** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
	showInRest?:boolean,
	/** Whether to generate and allow a UI for managing this content type in the admin. */
	showUi?:boolean,
	templates?:boolean,
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** Connection between the ContentType type and the Taxonomy type */
["ContentTypeToTaxonomyConnection"]: AliasType<{
	/** Edges for the ContentTypeToTaxonomyConnection connection */
	edges?:ValueTypes["ContentTypeToTaxonomyConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Taxonomy"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["ContentTypeToTaxonomyConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Taxonomy"],
		__typename?: boolean
}>;
	/** A taxonomy object */
["Taxonomy"]: AliasType<{
connectedContentTypes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TaxonomyToContentTypeConnection"]],
	/** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
	description?:boolean,
	/** The plural name of the post type within the GraphQL Schema. */
	graphqlPluralName?:boolean,
	/** The singular name of the post type within the GraphQL Schema. */
	graphqlSingleName?:boolean,
	/** Whether the taxonomy is hierarchical */
	hierarchical?:boolean,
	/** The globally unique identifier of the taxonomy object. */
	id?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Name of the taxonomy shown in the menu. Usually plural. */
	label?:boolean,
	/** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
	name?:boolean,
	/** Whether the taxonomy is publicly queryable */
	public?:boolean,
	/** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
	restBase?:boolean,
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass?:boolean,
	/** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
	showCloud?:boolean,
	/** Whether to display a column for the taxonomy on its post type listing screens. */
	showInAdminColumn?:boolean,
	/** Whether to add the post type to the GraphQL Schema. */
	showInGraphql?:boolean,
	/** Whether to show the taxonomy in the admin menu */
	showInMenu?:boolean,
	/** Whether the taxonomy is available for selection in navigation menus. */
	showInNavMenus?:boolean,
	/** Whether to show the taxonomy in the quick/bulk edit panel. */
	showInQuickEdit?:boolean,
	/** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
	showInRest?:boolean,
	/** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
	showUi?:boolean,
		__typename?: boolean
}>;
	/** Connection between the Taxonomy type and the ContentType type */
["TaxonomyToContentTypeConnection"]: AliasType<{
	/** Edges for the TaxonomyToContentTypeConnection connection */
	edges?:ValueTypes["TaxonomyToContentTypeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentType"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["TaxonomyToContentTypeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentType"],
		__typename?: boolean
}>;
	/** Information about pagination in a connection. */
["WPPageInfo"]: AliasType<{
	/** When paginating forwards, the cursor to continue. */
	endCursor?:boolean,
	/** When paginating forwards, are there more items? */
	hasNextPage?:boolean,
	/** When paginating backwards, are there more items? */
	hasPreviousPage?:boolean,
	/** When paginating backwards, the cursor to continue. */
	startCursor?:boolean,
		__typename?: boolean
}>;
	/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
["ContentTypeToContentNodeConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Allowed Content Types */
["ContentTypeEnum"]:ContentTypeEnum;
	/** Filter the connection based on input */
["DateQueryInput"]: {
	/** Nodes should be returned after this date */
	after?:ValueTypes["DateInput"] | null,
	/** Nodes should be returned before this date */
	before?:ValueTypes["DateInput"] | null,
	/** Column to query against */
	column?:ValueTypes["PostObjectsConnectionDateColumnEnum"] | null,
	/** For after/before, whether exact value should be matched or not */
	compare?:string | null,
	/** Day of the month (from 1 to 31) */
	day?:number | null,
	/** Hour (from 0 to 23) */
	hour?:number | null,
	/** For after/before, whether exact value should be matched or not */
	inclusive?:boolean | null,
	/** Minute (from 0 to 59) */
	minute?:number | null,
	/** Month number (from 1 to 12) */
	month?:number | null,
	/** OR or AND, how the sub-arrays should be compared */
	relation?:ValueTypes["RelationEnum"] | null,
	/** Second (0 to 59) */
	second?:number | null,
	/** Week of the year (from 0 to 53) */
	week?:number | null,
	/** 4 digit year (e.g. 2017) */
	year?:number | null
};
	/** Date values */
["DateInput"]: {
	/** Day of the month (from 1 to 31) */
	day?:number | null,
	/** Month number (from 1 to 12) */
	month?:number | null,
	/** 4 digit year (e.g. 2017) */
	year?:number | null
};
	/** The column to use when filtering by date */
["PostObjectsConnectionDateColumnEnum"]:PostObjectsConnectionDateColumnEnum;
	/** The logical relation between each item in the array when there are more than one. */
["RelationEnum"]:RelationEnum;
	/** The MimeType of the object */
["MimeTypeEnum"]:MimeTypeEnum;
	/** Options for ordering the connection */
["PostObjectsConnectionOrderbyInput"]: {
	/** The field to order the connection by */
	field:ValueTypes["PostObjectsConnectionOrderbyEnum"],
	/** Possible directions in which to order a list of items */
	order:ValueTypes["OrderEnum"]
};
	/** Field to order the connection by */
["PostObjectsConnectionOrderbyEnum"]:PostObjectsConnectionOrderbyEnum;
	/** The cardinality of the connection order */
["OrderEnum"]:OrderEnum;
	/** The status of the object. */
["PostStatusEnum"]:PostStatusEnum;
	/** Connection between the ContentType type and the ContentNode type */
["ContentTypeToContentNodeConnection"]: AliasType<{
	/** Edges for the ContentTypeToContentNodeConnection connection */
	edges?:ValueTypes["ContentTypeToContentNodeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["ContentTypeToContentNodeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** Details for labels of the PostType */
["PostTypeLabelDetails"]: AliasType<{
	/** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
	addNew?:boolean,
	/** Label for adding a new singular item. */
	addNewItem?:boolean,
	/** Label to signify all items in a submenu link. */
	allItems?:boolean,
	/** Label for archives in nav menus */
	archives?:boolean,
	/** Label for the attributes meta box. */
	attributes?:boolean,
	/** Label for editing a singular item. */
	editItem?:boolean,
	/** Label for the Featured Image meta box title. */
	featuredImage?:boolean,
	/** Label for the table views hidden heading. */
	filterItemsList?:boolean,
	/** Label for the media frame button. */
	insertIntoItem?:boolean,
	/** Label for the table hidden heading. */
	itemsList?:boolean,
	/** Label for the table pagination hidden heading. */
	itemsListNavigation?:boolean,
	/** Label for the menu name. */
	menuName?:boolean,
	/** General name for the post type, usually plural. */
	name?:boolean,
	/** Label for the new item page title. */
	newItem?:boolean,
	/** Label used when no items are found. */
	notFound?:boolean,
	/** Label used when no items are in the trash. */
	notFoundInTrash?:boolean,
	/** Label used to prefix parents of hierarchical items. */
	parentItemColon?:boolean,
	/** Label for removing the featured image. */
	removeFeaturedImage?:boolean,
	/** Label for searching plural items. */
	searchItems?:boolean,
	/** Label for setting the featured image. */
	setFeaturedImage?:boolean,
	/** Name for one object of this post type. */
	singularName?:boolean,
	/** Label for the media frame filter. */
	uploadedToThisItem?:boolean,
	/** Label in the media frame for using a featured image. */
	useFeaturedImage?:boolean,
	/** Label for viewing a singular item. */
	viewItem?:boolean,
	/** Label for viewing post type archives. */
	viewItems?:boolean,
		__typename?: boolean
}>;
	/** Connection between the ContentNode type and the User type */
["ContentNodeToEditLockConnectionEdge"]: AliasType<{
	/** The timestamp for when the node was last edited */
	lockTimestamp?:boolean,
	/** The node of the connection, without the edges */
	node?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** A User object */
["User"]: AliasType<{
avatar?: [{	/** The size attribute of the avatar field can be used to fetch avatars of different sizes. The value corresponds to the dimension in pixels to fetch. The default is 96 pixels. */
	size?:number | null,	/** Whether to always show the default image, never the Gravatar. Default false */
	forceDefault?:boolean | null,	/** The rating level of the avatar. */
	rating?:ValueTypes["AvatarRatingEnum"] | null},ValueTypes["Avatar"]],
badges?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["UserToBadgeConnectionWhereArgs"] | null},ValueTypes["UserToBadgeConnection"]],
	/** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
	capKey?:boolean,
	/** A list of capabilities (permissions) granted to the user */
	capabilities?:boolean,
comments?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["UserToCommentConnectionWhereArgs"] | null},ValueTypes["UserToCommentConnection"]],
	conditionalTags?:ValueTypes["ConditionalTags"],
	/** Identifies the primary key from the database. */
	databaseId?:boolean,
	/** Description of the user. */
	description?:boolean,
	/** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
	email?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["UserToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["UserToEnqueuedStylesheetConnection"]],
	/** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
	extraCapabilities?:boolean,
	/** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
	firstName?:boolean,
heroes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["UserToHeroConnectionWhereArgs"] | null},ValueTypes["UserToHeroConnection"]],
	/** The globally unique identifier for the user object. */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
	lastName?:boolean,
	/** The preferred language locale set for the user. Value derived from get_user_locale(). */
	locale?:boolean,
mediaItems?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["UserToMediaItemConnectionWhereArgs"] | null},ValueTypes["UserToMediaItemConnection"]],
	/** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
	name?:boolean,
	/** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
	nicename?:boolean,
	/** Nickname of the user. */
	nickname?:boolean,
pages?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["UserToPageConnectionWhereArgs"] | null},ValueTypes["UserToPageConnection"]],
posts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["UserToPostConnectionWhereArgs"] | null},ValueTypes["UserToPostConnection"]],
	/** The date the user registered or was created. The field follows a full ISO8601 date string format. */
	registeredDate?:boolean,
revisions?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["UserToContentRevisionUnionConnectionWhereArgs"] | null},ValueTypes["UserToContentRevisionUnionConnection"]],
roles?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["UserToUserRoleConnection"]],
	/** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
	slug?:boolean,
	templates?:boolean,
	/** The unique resource identifier path */
	uri?:boolean,
	/** A website url that is associated with the user. */
	url?:boolean,
	/** The Id of the user. Equivalent to WP_User-&gt;ID */
	userId?:boolean,
	/** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
	username?:boolean,
		__typename?: boolean
}>;
	/** The author of a comment */
["Commenter"]:AliasType<{
		/** Identifies the primary key from the database. */
	databaseId?:boolean,
	/** The email address of the author of a comment. */
	email?:boolean,
	/** The globally unique identifier for the comment author. */
	id?:boolean,
	/** Whether the author information is considered restricted. (not fully public) */
	isRestricted?:boolean,
	/** The name of the author of a comment. */
	name?:boolean,
	/** The url of the author of a comment. */
	url?:boolean;
		['...on User']?: Omit<ValueTypes["User"],keyof ValueTypes["Commenter"]>;
		['...on CommentAuthor']?: Omit<ValueTypes["CommentAuthor"],keyof ValueTypes["Commenter"]>;
		__typename?: boolean
}>;
	/** Object that can be identified with a Database ID */
["DatabaseIdentifier"]:AliasType<{
		/** The unique identifier stored in the database */
	databaseId?:boolean;
		['...on Badge']?: Omit<ValueTypes["Badge"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on User']?: Omit<ValueTypes["User"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on Comment']?: Omit<ValueTypes["Comment"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on Hero']?: Omit<ValueTypes["Hero"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on NodeWithFeaturedImage']?: Omit<ValueTypes["NodeWithFeaturedImage"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on Category']?: Omit<ValueTypes["Category"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on PostFormat']?: Omit<ValueTypes["PostFormat"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on Tag']?: Omit<ValueTypes["Tag"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on Menu']?: Omit<ValueTypes["Menu"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on MenuItem']?: Omit<ValueTypes["MenuItem"],keyof ValueTypes["DatabaseIdentifier"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["DatabaseIdentifier"]>;
		__typename?: boolean
}>;
	/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
["AvatarRatingEnum"]:AvatarRatingEnum;
	/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
["Avatar"]: AliasType<{
	/** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
	default?:boolean,
	/** HTML attributes to insert in the IMG element. Is not sanitized. */
	extraAttr?:boolean,
	/** Whether to always show the default image, never the Gravatar. */
	forceDefault?:boolean,
	/** Whether the avatar was successfully found. */
	foundAvatar?:boolean,
	/** Height of the avatar image. */
	height?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
	rating?:boolean,
	/** Type of url scheme to use. Typically HTTP vs. HTTPS. */
	scheme?:boolean,
	/** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
	size?:boolean,
	/** URL for the gravatar image source. */
	url?:boolean,
	/** Width of the avatar image. */
	width?:boolean,
		__typename?: boolean
}>;
	/** Arguments for filtering the UserToBadgeConnection connection */
["UserToBadgeConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the User type and the badge type */
["UserToBadgeConnection"]: AliasType<{
	/** Edges for the UserToBadgeConnection connection */
	edges?:ValueTypes["UserToBadgeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Badge"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToBadgeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Badge"],
		__typename?: boolean
}>;
	/** Arguments for filtering the UserToCommentConnection connection */
["UserToCommentConnectionWhereArgs"]: {
	/** Comment author email address. */
	authorEmail?:string | null,
	/** Array of author IDs to include comments for. */
	authorIn?:(string | undefined | null)[],
	/** Array of author IDs to exclude comments for. */
	authorNotIn?:(string | undefined | null)[],
	/** Comment author URL. */
	authorUrl?:string | null,
	/** Array of comment IDs to include. */
	commentIn?:(string | undefined | null)[],
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?:(string | undefined | null)[],
	/** Include comments of a given type. */
	commentType?:string | null,
	/** Include comments from a given array of comment types. */
	commentTypeIn?:(string | undefined | null)[],
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?:string | null,
	/** Content object author ID to limit results by. */
	contentAuthor?:(string | undefined | null)[],
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?:(string | undefined | null)[],
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?:(string | undefined | null)[],
	/** Limit results to those affiliated with a given content object ID. */
	contentId?:string | null,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?:(string | undefined | null)[],
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?:(string | undefined | null)[],
	/** Content object name to retrieve affiliated comments for. */
	contentName?:string | null,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?:number | null,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?:(string | undefined | null)[],
	/** Karma score to retrieve matching comments for. */
	karma?:number | null,
	/** The cardinality of the order of the connection */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field to order the comments by. */
	orderby?:ValueTypes["CommentsConnectionOrderbyEnum"] | null,
	/** Parent ID of comment to retrieve children of. */
	parent?:number | null,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?:(string | undefined | null)[],
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?:(string | undefined | null)[],
	/** Search term(s) to retrieve matching comments for. */
	search?:string | null,
	/** Comment status to limit results by. */
	status?:string | null,
	/** Include comments for a specific user ID. */
	userId?:string | null
};
	/** Options for ordering the connection */
["CommentsConnectionOrderbyEnum"]:CommentsConnectionOrderbyEnum;
	/** Connection between the User type and the Comment type */
["UserToCommentConnection"]: AliasType<{
	/** Edges for the UserToCommentConnection connection */
	edges?:ValueTypes["UserToCommentConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Comment"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToCommentConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Comment"],
		__typename?: boolean
}>;
	/** A Comment object */
["Comment"]: AliasType<{
	/** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
	agent?:boolean,
	/** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
	approved?:boolean,
	/** The author of the comment */
	author?:ValueTypes["CommentToCommenterConnectionEdge"],
	/** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
	authorIp?:boolean,
	/** ID for the comment, unique among comments. */
	commentId?:boolean,
	/** Connection between the Comment type and the ContentNode type */
	commentedOn?:ValueTypes["CommentToContentNodeConnectionEdge"],
content?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** The unique identifier stored in the database */
	databaseId?:boolean,
	/** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
	date?:boolean,
	/** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
	dateGmt?:boolean,
	/** The globally unique identifier for the comment object */
	id?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
	karma?:boolean,
parent?: [{	/** Arguments for filtering the connection */
	where?:ValueTypes["CommentToParentCommentConnectionWhereArgs"] | null},ValueTypes["CommentToParentCommentConnectionEdge"]],
	/** The database id of the parent comment node or null if it is the root comment */
	parentDatabaseId?:boolean,
	/** The globally unique identifier of the parent comment node. */
	parentId?:boolean,
replies?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["CommentToCommentConnectionWhereArgs"] | null},ValueTypes["CommentToCommentConnection"]],
	/** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
	type?:boolean,
		__typename?: boolean
}>;
	/** Connection between the Comment type and the Commenter type */
["CommentToCommenterConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Commenter"],
		__typename?: boolean
}>;
	/** Connection between the Comment type and the ContentNode type */
["CommentToContentNodeConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** The format of post field data. */
["PostObjectFieldFormatEnum"]:PostObjectFieldFormatEnum;
	/** Arguments for filtering the CommentToParentCommentConnection connection */
["CommentToParentCommentConnectionWhereArgs"]: {
	/** Comment author email address. */
	authorEmail?:string | null,
	/** Array of author IDs to include comments for. */
	authorIn?:(string | undefined | null)[],
	/** Array of author IDs to exclude comments for. */
	authorNotIn?:(string | undefined | null)[],
	/** Comment author URL. */
	authorUrl?:string | null,
	/** Array of comment IDs to include. */
	commentIn?:(string | undefined | null)[],
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?:(string | undefined | null)[],
	/** Include comments of a given type. */
	commentType?:string | null,
	/** Include comments from a given array of comment types. */
	commentTypeIn?:(string | undefined | null)[],
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?:string | null,
	/** Content object author ID to limit results by. */
	contentAuthor?:(string | undefined | null)[],
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?:(string | undefined | null)[],
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?:(string | undefined | null)[],
	/** Limit results to those affiliated with a given content object ID. */
	contentId?:string | null,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?:(string | undefined | null)[],
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?:(string | undefined | null)[],
	/** Content object name to retrieve affiliated comments for. */
	contentName?:string | null,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?:number | null,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?:(string | undefined | null)[],
	/** Karma score to retrieve matching comments for. */
	karma?:number | null,
	/** The cardinality of the order of the connection */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field to order the comments by. */
	orderby?:ValueTypes["CommentsConnectionOrderbyEnum"] | null,
	/** Parent ID of comment to retrieve children of. */
	parent?:number | null,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?:(string | undefined | null)[],
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?:(string | undefined | null)[],
	/** Search term(s) to retrieve matching comments for. */
	search?:string | null,
	/** Comment status to limit results by. */
	status?:string | null,
	/** Include comments for a specific user ID. */
	userId?:string | null
};
	/** Connection between the Comment type and the Comment type */
["CommentToParentCommentConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Comment"],
		__typename?: boolean
}>;
	/** Arguments for filtering the CommentToCommentConnection connection */
["CommentToCommentConnectionWhereArgs"]: {
	/** Comment author email address. */
	authorEmail?:string | null,
	/** Array of author IDs to include comments for. */
	authorIn?:(string | undefined | null)[],
	/** Array of author IDs to exclude comments for. */
	authorNotIn?:(string | undefined | null)[],
	/** Comment author URL. */
	authorUrl?:string | null,
	/** Array of comment IDs to include. */
	commentIn?:(string | undefined | null)[],
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?:(string | undefined | null)[],
	/** Include comments of a given type. */
	commentType?:string | null,
	/** Include comments from a given array of comment types. */
	commentTypeIn?:(string | undefined | null)[],
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?:string | null,
	/** Content object author ID to limit results by. */
	contentAuthor?:(string | undefined | null)[],
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?:(string | undefined | null)[],
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?:(string | undefined | null)[],
	/** Limit results to those affiliated with a given content object ID. */
	contentId?:string | null,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?:(string | undefined | null)[],
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?:(string | undefined | null)[],
	/** Content object name to retrieve affiliated comments for. */
	contentName?:string | null,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?:number | null,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?:(string | undefined | null)[],
	/** Karma score to retrieve matching comments for. */
	karma?:number | null,
	/** The cardinality of the order of the connection */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field to order the comments by. */
	orderby?:ValueTypes["CommentsConnectionOrderbyEnum"] | null,
	/** Parent ID of comment to retrieve children of. */
	parent?:number | null,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?:(string | undefined | null)[],
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?:(string | undefined | null)[],
	/** Search term(s) to retrieve matching comments for. */
	search?:string | null,
	/** Comment status to limit results by. */
	status?:string | null,
	/** Include comments for a specific user ID. */
	userId?:string | null
};
	/** Connection between the Comment type and the Comment type */
["CommentToCommentConnection"]: AliasType<{
	/** Edges for the CommentToCommentConnection connection */
	edges?:ValueTypes["CommentToCommentConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Comment"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["CommentToCommentConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Comment"],
		__typename?: boolean
}>;
	/** Connection between the User type and the EnqueuedScript type */
["UserToEnqueuedScriptConnection"]: AliasType<{
	/** Edges for the UserToEnqueuedScriptConnection connection */
	edges?:ValueTypes["UserToEnqueuedScriptConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["EnqueuedScript"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToEnqueuedScriptConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["EnqueuedScript"],
		__typename?: boolean
}>;
	/** Script enqueued by the CMS */
["EnqueuedScript"]: AliasType<{
	/** @todo */
	args?:boolean,
	/** Dependencies needed to use this asset */
	dependencies?:ValueTypes["EnqueuedScript"],
	/** Extra information needed for the script */
	extra?:boolean,
	/** The handle of the enqueued asset */
	handle?:boolean,
	/** The ID of the enqueued asset */
	id?:boolean,
	/** The source of the asset */
	src?:boolean,
	/** The version of the enqueued asset */
	version?:boolean,
		__typename?: boolean
}>;
	/** Asset enqueued by the CMS */
["EnqueuedAsset"]:AliasType<{
		/** @todo */
	args?:boolean,
	/** Dependencies needed to use this asset */
	dependencies?:ValueTypes["EnqueuedScript"],
	/** Extra information needed for the script */
	extra?:boolean,
	/** The handle of the enqueued asset */
	handle?:boolean,
	/** The ID of the enqueued asset */
	id?:boolean,
	/** The source of the asset */
	src?:boolean,
	/** The version of the enqueued asset */
	version?:boolean;
		['...on EnqueuedScript']?: Omit<ValueTypes["EnqueuedScript"],keyof ValueTypes["EnqueuedAsset"]>;
		['...on EnqueuedStylesheet']?: Omit<ValueTypes["EnqueuedStylesheet"],keyof ValueTypes["EnqueuedAsset"]>;
		__typename?: boolean
}>;
	/** Connection between the User type and the EnqueuedStylesheet type */
["UserToEnqueuedStylesheetConnection"]: AliasType<{
	/** Edges for the UserToEnqueuedStylesheetConnection connection */
	edges?:ValueTypes["UserToEnqueuedStylesheetConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["EnqueuedStylesheet"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToEnqueuedStylesheetConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["EnqueuedStylesheet"],
		__typename?: boolean
}>;
	/** Stylesheet enqueued by the CMS */
["EnqueuedStylesheet"]: AliasType<{
	/** @todo */
	args?:boolean,
	/** Dependencies needed to use this asset */
	dependencies?:ValueTypes["EnqueuedScript"],
	/** Extra information needed for the script */
	extra?:boolean,
	/** The handle of the enqueued asset */
	handle?:boolean,
	/** The ID of the enqueued asset */
	id?:boolean,
	/** The source of the asset */
	src?:boolean,
	/** The version of the enqueued asset */
	version?:boolean,
		__typename?: boolean
}>;
	/** Arguments for filtering the UserToHeroConnection connection */
["UserToHeroConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the User type and the hero type */
["UserToHeroConnection"]: AliasType<{
	/** Edges for the UserToHeroConnection connection */
	edges?:ValueTypes["UserToHeroConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Hero"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToHeroConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Hero"],
		__typename?: boolean
}>;
	/** The hero type */
["Hero"]: AliasType<{
	/** Connection between the NodeWithAuthor type and the User type */
	author?:ValueTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:boolean,
	/** The globally unique identifier of the author of the node */
	authorId?:boolean,
awards?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["HeroToBadgeConnection"]],
	conditionalTags?:ValueTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ValueTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId?:boolean,
	/** Post publishing date. */
	date?:boolean,
	/** The publishing date set in GMT. */
	dateGmt?:boolean,
	/** The desired slug of the post */
	desiredSlug?:boolean,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ValueTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedStylesheetConnection"]],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:boolean,
	/** The id field matches the WP_Post-&gt;ID field. */
	heroId?:boolean,
	/** The globally unique identifier of the hero object. */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ValueTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:boolean,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:boolean,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:boolean,
	name?:boolean,
	/** Connection between the hero type and the hero type */
	preview?:ValueTypes["HeroToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:boolean,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:boolean,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:boolean,
	/** The current status of the object */
	status?:boolean,
	/** The template assigned to the node */
	template?:ValueTypes["ContentTemplate"],
	templates?:boolean,
title?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** A node that can have a template associated with it */
["NodeWithTemplate"]:AliasType<{
		/** The template assigned to the node */
	template?:ValueTypes["ContentTemplate"];
		['...on Badge']?: Omit<ValueTypes["Badge"],keyof ValueTypes["NodeWithTemplate"]>;
		['...on Hero']?: Omit<ValueTypes["Hero"],keyof ValueTypes["NodeWithTemplate"]>;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["NodeWithTemplate"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["NodeWithTemplate"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithTemplate"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["NodeWithTemplate"]>;
		__typename?: boolean
}>;
	/** The template assigned to a node of content */
["ContentTemplate"]:AliasType<{
		/** The name of the template */
	templateName?:boolean;
		['...on DefaultTemplate']?: Omit<ValueTypes["DefaultTemplate"],keyof ValueTypes["ContentTemplate"]>;
		['...on CoverTemplate']?: Omit<ValueTypes["CoverTemplate"],keyof ValueTypes["ContentTemplate"]>;
		['...on FullWidthTemplate']?: Omit<ValueTypes["FullWidthTemplate"],keyof ValueTypes["ContentTemplate"]>;
		__typename?: boolean
}>;
	/** A node that NodeWith a title */
["NodeWithTitle"]:AliasType<{
	title?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean];
		['...on Badge']?: Omit<ValueTypes["Badge"],keyof ValueTypes["NodeWithTitle"]>;
		['...on Hero']?: Omit<ValueTypes["Hero"],keyof ValueTypes["NodeWithTitle"]>;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["NodeWithTitle"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["NodeWithTitle"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithTitle"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["NodeWithTitle"]>;
		__typename?: boolean
}>;
	/** A node that can have an author assigned to it */
["NodeWithAuthor"]:AliasType<{
		/** Connection between the NodeWithAuthor type and the User type */
	author?:ValueTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:boolean,
	/** The globally unique identifier of the author of the node */
	authorId?:boolean;
		['...on Badge']?: Omit<ValueTypes["Badge"],keyof ValueTypes["NodeWithAuthor"]>;
		['...on Hero']?: Omit<ValueTypes["Hero"],keyof ValueTypes["NodeWithAuthor"]>;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["NodeWithAuthor"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["NodeWithAuthor"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithAuthor"]>;
		__typename?: boolean
}>;
	/** Connection between the NodeWithAuthor type and the User type */
["NodeWithAuthorToUserConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Connection between the hero type and the badge type */
["HeroToBadgeConnection"]: AliasType<{
	/** Edges for the HeroToBadgeConnection connection */
	edges?:ValueTypes["HeroToBadgeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Badge"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["HeroToBadgeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Badge"],
		__typename?: boolean
}>;
	/** Connection between the ContentNode type and the EnqueuedScript type */
["ContentNodeToEnqueuedScriptConnection"]: AliasType<{
	/** Edges for the ContentNodeToEnqueuedScriptConnection connection */
	edges?:ValueTypes["ContentNodeToEnqueuedScriptConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["EnqueuedScript"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["ContentNodeToEnqueuedScriptConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["EnqueuedScript"],
		__typename?: boolean
}>;
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
["ContentNodeToEnqueuedStylesheetConnection"]: AliasType<{
	/** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
	edges?:ValueTypes["ContentNodeToEnqueuedStylesheetConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["EnqueuedStylesheet"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["ContentNodeToEnqueuedStylesheetConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["EnqueuedStylesheet"],
		__typename?: boolean
}>;
	/** Connection between the ContentNode type and the User type */
["ContentNodeToEditLastConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Connection between the hero type and the hero type */
["HeroToPreviewConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Hero"],
		__typename?: boolean
}>;
	/** Arguments for filtering the UserToMediaItemConnection connection */
["UserToMediaItemConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the User type and the mediaItem type */
["UserToMediaItemConnection"]: AliasType<{
	/** Edges for the UserToMediaItemConnection connection */
	edges?:ValueTypes["UserToMediaItemConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["MediaItem"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToMediaItemConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["MediaItem"],
		__typename?: boolean
}>;
	/** The mediaItem type */
["MediaItem"]: AliasType<{
	/** Alternative text to display when resource is not displayed */
	altText?:boolean,
ancestors?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"] | null},ValueTypes["HierarchicalContentNodeToContentNodeAncestorsConnection"]],
	/** Connection between the NodeWithAuthor type and the User type */
	author?:ValueTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:boolean,
	/** The globally unique identifier of the author of the node */
	authorId?:boolean,
caption?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
children?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"] | null},ValueTypes["HierarchicalContentNodeToContentNodeChildrenConnection"]],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?:boolean,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?:boolean,
comments?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["MediaItemToCommentConnectionWhereArgs"] | null},ValueTypes["MediaItemToCommentConnection"]],
	conditionalTags?:ValueTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ValueTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId?:boolean,
	/** Post publishing date. */
	date?:boolean,
	/** The publishing date set in GMT. */
	dateGmt?:boolean,
description?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** The desired slug of the post */
	desiredSlug?:boolean,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ValueTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedStylesheetConnection"]],
fileSize?: [{	/** Size of the MediaItem to return */
	size?:ValueTypes["MediaItemSizeEnum"] | null},boolean],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:boolean,
	/** The globally unique identifier of the attachment object. */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ValueTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:boolean,
	/** Details about the mediaItem */
	mediaDetails?:ValueTypes["MediaDetails"],
	/** The id field matches the WP_Post-&gt;ID field. */
	mediaItemId?:boolean,
	/** Url of the mediaItem */
	mediaItemUrl?:boolean,
	/** Type of resource */
	mediaType?:boolean,
	/** The mime type of the mediaItem */
	mimeType?:boolean,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:boolean,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:boolean,
	/** The parent of the node. The parent object can be of various types */
	parent?:ValueTypes["HierarchicalContentNodeToParentContentNodeConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?:boolean,
	/** The globally unique identifier of the parent node. */
	parentId?:boolean,
	/** The database id of the preview node */
	previewRevisionDatabaseId?:boolean,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:boolean,
sizes?: [{	/** Size of the MediaItem to calculate sizes with */
	size?:ValueTypes["MediaItemSizeEnum"] | null},boolean],
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:boolean,
sourceUrl?: [{	/** Size of the MediaItem to return */
	size?:ValueTypes["MediaItemSizeEnum"] | null},boolean],
srcSet?: [{	/** Size of the MediaItem to calculate srcSet with */
	size?:ValueTypes["MediaItemSizeEnum"] | null},boolean],
	/** The current status of the object */
	status?:boolean,
	/** The template assigned to the node */
	template?:ValueTypes["ContentTemplate"],
	templates?:boolean,
title?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** A node that can have comments associated with it */
["NodeWithComments"]:AliasType<{
		/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?:boolean,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?:boolean;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["NodeWithComments"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["NodeWithComments"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithComments"]>;
		__typename?: boolean
}>;
	/** Content node with hierarchical (parent/child) relationships */
["HierarchicalContentNode"]:AliasType<{
	ancestors?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"] | null},ValueTypes["HierarchicalContentNodeToContentNodeAncestorsConnection"]],
children?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"] | null},ValueTypes["HierarchicalContentNodeToContentNodeChildrenConnection"]],
	/** The parent of the node. The parent object can be of various types */
	parent?:ValueTypes["HierarchicalContentNodeToParentContentNodeConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?:boolean,
	/** The globally unique identifier of the parent node. */
	parentId?:boolean;
		['...on MediaItem']?: Omit<ValueTypes["MediaItem"],keyof ValueTypes["HierarchicalContentNode"]>;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["HierarchicalContentNode"]>;
		__typename?: boolean
}>;
	/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
["HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToContentNodeAncestorsConnection"]: AliasType<{
	/** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
	edges?:ValueTypes["HierarchicalContentNodeToContentNodeAncestorsConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["HierarchicalContentNodeToContentNodeAncestorsConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
["HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToContentNodeChildrenConnection"]: AliasType<{
	/** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
	edges?:ValueTypes["HierarchicalContentNodeToContentNodeChildrenConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["HierarchicalContentNodeToContentNodeChildrenConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToParentContentNodeConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** Arguments for filtering the MediaItemToCommentConnection connection */
["MediaItemToCommentConnectionWhereArgs"]: {
	/** Comment author email address. */
	authorEmail?:string | null,
	/** Array of author IDs to include comments for. */
	authorIn?:(string | undefined | null)[],
	/** Array of author IDs to exclude comments for. */
	authorNotIn?:(string | undefined | null)[],
	/** Comment author URL. */
	authorUrl?:string | null,
	/** Array of comment IDs to include. */
	commentIn?:(string | undefined | null)[],
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?:(string | undefined | null)[],
	/** Include comments of a given type. */
	commentType?:string | null,
	/** Include comments from a given array of comment types. */
	commentTypeIn?:(string | undefined | null)[],
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?:string | null,
	/** Content object author ID to limit results by. */
	contentAuthor?:(string | undefined | null)[],
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?:(string | undefined | null)[],
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?:(string | undefined | null)[],
	/** Limit results to those affiliated with a given content object ID. */
	contentId?:string | null,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?:(string | undefined | null)[],
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?:(string | undefined | null)[],
	/** Content object name to retrieve affiliated comments for. */
	contentName?:string | null,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?:number | null,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?:(string | undefined | null)[],
	/** Karma score to retrieve matching comments for. */
	karma?:number | null,
	/** The cardinality of the order of the connection */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field to order the comments by. */
	orderby?:ValueTypes["CommentsConnectionOrderbyEnum"] | null,
	/** Parent ID of comment to retrieve children of. */
	parent?:number | null,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?:(string | undefined | null)[],
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?:(string | undefined | null)[],
	/** Search term(s) to retrieve matching comments for. */
	search?:string | null,
	/** Comment status to limit results by. */
	status?:string | null,
	/** Include comments for a specific user ID. */
	userId?:string | null
};
	/** Connection between the mediaItem type and the Comment type */
["MediaItemToCommentConnection"]: AliasType<{
	/** Edges for the MediaItemToCommentConnection connection */
	edges?:ValueTypes["MediaItemToCommentConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Comment"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["MediaItemToCommentConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Comment"],
		__typename?: boolean
}>;
	/** The size of the media item object. */
["MediaItemSizeEnum"]:MediaItemSizeEnum;
	/** File details for a Media Item */
["MediaDetails"]: AliasType<{
	/** The filename of the mediaItem */
	file?:boolean,
	/** The height of the mediaItem */
	height?:boolean,
	/** Meta information associated with the mediaItem */
	meta?:ValueTypes["MediaItemMeta"],
	/** The available sizes of the mediaItem */
	sizes?:ValueTypes["MediaSize"],
	/** The width of the mediaItem */
	width?:boolean,
		__typename?: boolean
}>;
	/** Meta connected to a MediaItem */
["MediaItemMeta"]: AliasType<{
	/** Aperture measurement of the media item. */
	aperture?:boolean,
	/** Information about the camera used to create the media item. */
	camera?:boolean,
	/** The text string description associated with the media item. */
	caption?:boolean,
	/** Copyright information associated with the media item. */
	copyright?:boolean,
	/** The date/time when the media was created. */
	createdTimestamp?:boolean,
	/** The original creator of the media item. */
	credit?:boolean,
	/** The focal length value of the media item. */
	focalLength?:boolean,
	/** The ISO (International Organization for Standardization) value of the media item. */
	iso?:boolean,
	/** List of keywords used to describe or identfy the media item. */
	keywords?:boolean,
	/** The vertical or horizontal aspect of the media item. */
	orientation?:boolean,
	/** The shutter speed information of the media item. */
	shutterSpeed?:boolean,
	/** A useful title for the media item. */
	title?:boolean,
		__typename?: boolean
}>;
	/** Details of an available size for a media item */
["MediaSize"]: AliasType<{
	/** The filename of the referenced size */
	file?:boolean,
	/** The filesize of the resource */
	fileSize?:boolean,
	/** The height of the referenced size */
	height?:boolean,
	/** The mime type of the referenced size */
	mimeType?:boolean,
	/** The referenced size name */
	name?:boolean,
	/** The url of the referenced size */
	sourceUrl?:boolean,
	/** The width of the referenced size */
	width?:boolean,
		__typename?: boolean
}>;
	/** Arguments for filtering the UserToPageConnection connection */
["UserToPageConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the User type and the page type */
["UserToPageConnection"]: AliasType<{
	/** Edges for the UserToPageConnection connection */
	edges?:ValueTypes["UserToPageConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Page"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToPageConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Page"],
		__typename?: boolean
}>;
	/** The page type */
["Page"]: AliasType<{
ancestors?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"] | null},ValueTypes["HierarchicalContentNodeToContentNodeAncestorsConnection"]],
	/** Connection between the NodeWithAuthor type and the User type */
	author?:ValueTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:boolean,
	/** The globally unique identifier of the author of the node */
	authorId?:boolean,
children?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"] | null},ValueTypes["HierarchicalContentNodeToContentNodeChildrenConnection"]],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?:boolean,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?:boolean,
comments?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PageToCommentConnectionWhereArgs"] | null},ValueTypes["PageToCommentConnection"]],
	conditionalTags?:ValueTypes["ConditionalTags"],
content?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ValueTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId?:boolean,
	/** Post publishing date. */
	date?:boolean,
	/** The publishing date set in GMT. */
	dateGmt?:boolean,
	/** The desired slug of the post */
	desiredSlug?:boolean,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ValueTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedStylesheetConnection"]],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?:ValueTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?:boolean,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?:boolean,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:boolean,
	/** The globally unique identifier of the page object. */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether this page is set to the static front page. */
	isFrontPage?:boolean,
	/** Whether this page is set to the blog posts page. */
	isPostsPage?:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether this page is set to the privacy page. */
	isPrivacyPage?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** True if the node is a revision of another node */
	isRevision?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ValueTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:boolean,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:boolean,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:boolean,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:boolean,
	/** The id field matches the WP_Post-&gt;ID field. */
	pageId?:boolean,
	/** The parent of the node. The parent object can be of various types */
	parent?:ValueTypes["HierarchicalContentNodeToParentContentNodeConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?:boolean,
	/** The globally unique identifier of the parent node. */
	parentId?:boolean,
	/** Connection between the page type and the page type */
	preview?:ValueTypes["PageToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:boolean,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:boolean,
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?:ValueTypes["NodeWithRevisionsToContentNodeConnectionEdge"],
revisions?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PageToRevisionConnectionWhereArgs"] | null},ValueTypes["PageToRevisionConnection"]],
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:boolean,
	/** The current status of the object */
	status?:boolean,
	/** The template assigned to a node of content */
	template?:ValueTypes["ContentTemplate"],
	templates?:boolean,
title?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** A node that supports the content editor */
["NodeWithContentEditor"]:AliasType<{
	content?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean];
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["NodeWithContentEditor"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithContentEditor"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["NodeWithContentEditor"]>;
		__typename?: boolean
}>;
	/** A node that can have a featured image set */
["NodeWithFeaturedImage"]:AliasType<{
		conditionalTags?:ValueTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ValueTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId?:boolean,
	/** Post publishing date. */
	date?:boolean,
	/** The publishing date set in GMT. */
	dateGmt?:boolean,
	/** The desired slug of the post */
	desiredSlug?:boolean,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ValueTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedStylesheetConnection"]],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?:ValueTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?:boolean,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?:boolean,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:boolean,
	/** The unique resource identifier path */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ValueTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:boolean,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:boolean,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:boolean,
	/** The database id of the preview node */
	previewRevisionDatabaseId?:boolean,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:boolean,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:boolean,
	/** The current status of the object */
	status?:boolean,
	/** The template assigned to a node of content */
	template?:ValueTypes["ContentTemplate"],
	templates?:boolean,
	/** The unique resource identifier path */
	uri?:boolean;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["NodeWithFeaturedImage"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithFeaturedImage"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["NodeWithFeaturedImage"]>;
		__typename?: boolean
}>;
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
["NodeWithFeaturedImageToMediaItemConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["MediaItem"],
		__typename?: boolean
}>;
	/** A node that can have revisions */
["NodeWithRevisions"]:AliasType<{
		/** True if the node is a revision of another node */
	isRevision?:boolean,
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?:ValueTypes["NodeWithRevisionsToContentNodeConnectionEdge"];
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["NodeWithRevisions"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithRevisions"]>;
		__typename?: boolean
}>;
	/** Connection between the NodeWithRevisions type and the ContentNode type */
["NodeWithRevisionsToContentNodeConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** A node that can have page attributes */
["NodeWithPageAttributes"]:AliasType<{
		/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:boolean;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["NodeWithPageAttributes"]>;
		__typename?: boolean
}>;
	/** Nodes that can be linked to as Menu Items */
["MenuItemLinkable"]:AliasType<{
		/** The unique resource identifier path */
	databaseId?:boolean,
	/** The unique resource identifier path */
	id?:boolean,
	/** The unique resource identifier path */
	uri?:boolean;
		['...on Page']?: Omit<ValueTypes["Page"],keyof ValueTypes["MenuItemLinkable"]>;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["MenuItemLinkable"]>;
		['...on Category']?: Omit<ValueTypes["Category"],keyof ValueTypes["MenuItemLinkable"]>;
		['...on Tag']?: Omit<ValueTypes["Tag"],keyof ValueTypes["MenuItemLinkable"]>;
		['...on Movie']?: Omit<ValueTypes["Movie"],keyof ValueTypes["MenuItemLinkable"]>;
		__typename?: boolean
}>;
	/** Arguments for filtering the PageToCommentConnection connection */
["PageToCommentConnectionWhereArgs"]: {
	/** Comment author email address. */
	authorEmail?:string | null,
	/** Array of author IDs to include comments for. */
	authorIn?:(string | undefined | null)[],
	/** Array of author IDs to exclude comments for. */
	authorNotIn?:(string | undefined | null)[],
	/** Comment author URL. */
	authorUrl?:string | null,
	/** Array of comment IDs to include. */
	commentIn?:(string | undefined | null)[],
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?:(string | undefined | null)[],
	/** Include comments of a given type. */
	commentType?:string | null,
	/** Include comments from a given array of comment types. */
	commentTypeIn?:(string | undefined | null)[],
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?:string | null,
	/** Content object author ID to limit results by. */
	contentAuthor?:(string | undefined | null)[],
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?:(string | undefined | null)[],
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?:(string | undefined | null)[],
	/** Limit results to those affiliated with a given content object ID. */
	contentId?:string | null,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?:(string | undefined | null)[],
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?:(string | undefined | null)[],
	/** Content object name to retrieve affiliated comments for. */
	contentName?:string | null,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?:number | null,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?:(string | undefined | null)[],
	/** Karma score to retrieve matching comments for. */
	karma?:number | null,
	/** The cardinality of the order of the connection */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field to order the comments by. */
	orderby?:ValueTypes["CommentsConnectionOrderbyEnum"] | null,
	/** Parent ID of comment to retrieve children of. */
	parent?:number | null,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?:(string | undefined | null)[],
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?:(string | undefined | null)[],
	/** Search term(s) to retrieve matching comments for. */
	search?:string | null,
	/** Comment status to limit results by. */
	status?:string | null,
	/** Include comments for a specific user ID. */
	userId?:string | null
};
	/** Connection between the page type and the Comment type */
["PageToCommentConnection"]: AliasType<{
	/** Edges for the PageToCommentConnection connection */
	edges?:ValueTypes["PageToCommentConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Comment"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PageToCommentConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Comment"],
		__typename?: boolean
}>;
	/** Connection between the page type and the page type */
["PageToPreviewConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Page"],
		__typename?: boolean
}>;
	/** Arguments for filtering the pageToRevisionConnection connection */
["PageToRevisionConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the page type and the page type */
["PageToRevisionConnection"]: AliasType<{
	/** Edges for the pageToRevisionConnection connection */
	edges?:ValueTypes["PageToRevisionConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Page"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PageToRevisionConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Page"],
		__typename?: boolean
}>;
	/** Arguments for filtering the UserToPostConnection connection */
["UserToPostConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Category ID */
	categoryId?:number | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?:(string | undefined | null)[],
	/** Use Category Slug */
	categoryName?:string | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Tag Slug */
	tag?:string | null,
	/** Use Tag ID */
	tagId?:string | null,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?:(string | undefined | null)[],
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?:(string | undefined | null)[],
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?:(string | undefined | null)[],
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?:(string | undefined | null)[],
	/** Title of the object */
	title?:string | null
};
	/** Connection between the User type and the post type */
["UserToPostConnection"]: AliasType<{
	/** Edges for the UserToPostConnection connection */
	edges?:ValueTypes["UserToPostConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Post"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToPostConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** The post type */
["Post"]: AliasType<{
	/** Connection between the NodeWithAuthor type and the User type */
	author?:ValueTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:boolean,
	/** The globally unique identifier of the author of the node */
	authorId?:boolean,
categories?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PostToCategoryConnectionWhereArgs"] | null},ValueTypes["PostToCategoryConnection"]],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?:boolean,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?:boolean,
comments?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PostToCommentConnectionWhereArgs"] | null},ValueTypes["PostToCommentConnection"]],
	conditionalTags?:ValueTypes["ConditionalTags"],
content?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ValueTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId?:boolean,
	/** Post publishing date. */
	date?:boolean,
	/** The publishing date set in GMT. */
	dateGmt?:boolean,
	/** The desired slug of the post */
	desiredSlug?:boolean,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ValueTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedStylesheetConnection"]],
excerpt?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?:ValueTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?:boolean,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?:boolean,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:boolean,
	/** The globally unique identifier of the post object. */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** True if the node is a revision of another node */
	isRevision?:boolean,
	/** Whether this page is sticky */
	isSticky?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ValueTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:boolean,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:boolean,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:boolean,
	/** Whether the pings are open or closed for this particular post. */
	pingStatus?:boolean,
	/** URLs that have been pinged. */
	pinged?:boolean,
postFormats?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PostToPostFormatConnectionWhereArgs"] | null},ValueTypes["PostToPostFormatConnection"]],
	/** The id field matches the WP_Post-&gt;ID field. */
	postId?:boolean,
	/** Connection between the post type and the post type */
	preview?:ValueTypes["PostToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:boolean,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:boolean,
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?:ValueTypes["NodeWithRevisionsToContentNodeConnectionEdge"],
revisions?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PostToRevisionConnectionWhereArgs"] | null},ValueTypes["PostToRevisionConnection"]],
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:boolean,
	/** The current status of the object */
	status?:boolean,
tags?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PostToTagConnectionWhereArgs"] | null},ValueTypes["PostToTagConnection"]],
	/** The template assigned to a node of content */
	template?:ValueTypes["ContentTemplate"],
	templates?:boolean,
terms?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PostToTermNodeConnectionWhereArgs"] | null},ValueTypes["PostToTermNodeConnection"]],
title?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** URLs queued to be pinged. */
	toPing?:boolean,
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** A node that can have an excerpt */
["NodeWithExcerpt"]:AliasType<{
	excerpt?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean];
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithExcerpt"]>;
		__typename?: boolean
}>;
	/** A node that can have trackbacks and pingbacks */
["NodeWithTrackbacks"]:AliasType<{
		/** Whether the pings are open or closed for this particular post. */
	pingStatus?:boolean,
	/** URLs that have been pinged. */
	pinged?:boolean,
	/** URLs queued to be pinged. */
	toPing?:boolean;
		['...on Post']?: Omit<ValueTypes["Post"],keyof ValueTypes["NodeWithTrackbacks"]>;
		__typename?: boolean
}>;
	/** Arguments for filtering the PostToCategoryConnection connection */
["PostToCategoryConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Options for ordering the connection by */
["TermObjectsConnectionOrderbyEnum"]:TermObjectsConnectionOrderbyEnum;
	/** Connection between the post type and the category type */
["PostToCategoryConnection"]: AliasType<{
	/** Edges for the PostToCategoryConnection connection */
	edges?:ValueTypes["PostToCategoryConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Category"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PostToCategoryConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Category"],
		__typename?: boolean
}>;
	/** The category type */
["Category"]: AliasType<{
ancestors?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["CategoryToAncestorsCategoryConnection"]],
	/** The id field matches the WP_Post-&gt;ID field. */
	categoryId?:boolean,
children?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["CategoryToCategoryConnectionWhereArgs"] | null},ValueTypes["CategoryToCategoryConnection"]],
	conditionalTags?:ValueTypes["ConditionalTags"],
contentNodes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["CategoryToContentNodeConnectionWhereArgs"] | null},ValueTypes["CategoryToContentNodeConnection"]],
	/** The number of objects connected to the object */
	count?:boolean,
	/** The unique resource identifier path */
	databaseId?:boolean,
	/** The description of the object */
	description?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TermNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TermNodeToEnqueuedStylesheetConnection"]],
	/** The unique resource identifier path */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The link to the term */
	link?:boolean,
	/** The human friendly name of the object. */
	name?:boolean,
	/** Connection between the category type and the category type */
	parent?:ValueTypes["CategoryToParentCategoryConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?:boolean,
	/** The globally unique identifier of the parent node. */
	parentId?:boolean,
posts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["CategoryToPostConnectionWhereArgs"] | null},ValueTypes["CategoryToPostConnection"]],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?:boolean,
	/** Connection between the category type and the Taxonomy type */
	taxonomy?:ValueTypes["CategoryToTaxonomyConnectionEdge"],
	templates?:boolean,
	/** The ID of the term group that this term object belongs to */
	termGroupId?:boolean,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?:boolean,
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
["TermNode"]:AliasType<{
		conditionalTags?:ValueTypes["ConditionalTags"],
	/** The number of objects connected to the object */
	count?:boolean,
	/** Identifies the primary key from the database. */
	databaseId?:boolean,
	/** The description of the object */
	description?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TermNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TermNodeToEnqueuedStylesheetConnection"]],
	/** The unique resource identifier path */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The link to the term */
	link?:boolean,
	/** The human friendly name of the object. */
	name?:boolean,
	/** An alphanumeric identifier for the object unique to its type. */
	slug?:boolean,
	templates?:boolean,
	/** The ID of the term group that this term object belongs to */
	termGroupId?:boolean,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?:boolean,
	/** The unique resource identifier path */
	uri?:boolean;
		['...on Category']?: Omit<ValueTypes["Category"],keyof ValueTypes["TermNode"]>;
		['...on PostFormat']?: Omit<ValueTypes["PostFormat"],keyof ValueTypes["TermNode"]>;
		['...on Tag']?: Omit<ValueTypes["Tag"],keyof ValueTypes["TermNode"]>;
		__typename?: boolean
}>;
	/** Connection between the TermNode type and the EnqueuedScript type */
["TermNodeToEnqueuedScriptConnection"]: AliasType<{
	/** Edges for the TermNodeToEnqueuedScriptConnection connection */
	edges?:ValueTypes["TermNodeToEnqueuedScriptConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["EnqueuedScript"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["TermNodeToEnqueuedScriptConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["EnqueuedScript"],
		__typename?: boolean
}>;
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
["TermNodeToEnqueuedStylesheetConnection"]: AliasType<{
	/** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
	edges?:ValueTypes["TermNodeToEnqueuedStylesheetConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["EnqueuedStylesheet"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["TermNodeToEnqueuedStylesheetConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["EnqueuedStylesheet"],
		__typename?: boolean
}>;
	/** Term node with hierarchical (parent/child) relationships */
["HierarchicalTermNode"]:AliasType<{
		/** Database id of the parent node */
	parentDatabaseId?:boolean,
	/** The globally unique identifier of the parent node. */
	parentId?:boolean;
		['...on Category']?: Omit<ValueTypes["Category"],keyof ValueTypes["HierarchicalTermNode"]>;
		__typename?: boolean
}>;
	/** Connection between the category type and the category type */
["CategoryToAncestorsCategoryConnection"]: AliasType<{
	/** Edges for the CategoryToAncestorsCategoryConnection connection */
	edges?:ValueTypes["CategoryToAncestorsCategoryConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Category"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["CategoryToAncestorsCategoryConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Category"],
		__typename?: boolean
}>;
	/** Arguments for filtering the CategoryToCategoryConnection connection */
["CategoryToCategoryConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Connection between the category type and the category type */
["CategoryToCategoryConnection"]: AliasType<{
	/** Edges for the CategoryToCategoryConnection connection */
	edges?:ValueTypes["CategoryToCategoryConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Category"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["CategoryToCategoryConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Category"],
		__typename?: boolean
}>;
	/** Arguments for filtering the CategoryToContentNodeConnection connection */
["CategoryToContentNodeConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypesOfCategoryEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Allowed Content Types of the Category taxonomy. */
["ContentTypesOfCategoryEnum"]:ContentTypesOfCategoryEnum;
	/** Connection between the category type and the ContentNode type */
["CategoryToContentNodeConnection"]: AliasType<{
	/** Edges for the CategoryToContentNodeConnection connection */
	edges?:ValueTypes["CategoryToContentNodeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["CategoryToContentNodeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** Connection between the category type and the category type */
["CategoryToParentCategoryConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Category"],
		__typename?: boolean
}>;
	/** Arguments for filtering the CategoryToPostConnection connection */
["CategoryToPostConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Category ID */
	categoryId?:number | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?:(string | undefined | null)[],
	/** Use Category Slug */
	categoryName?:string | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Tag Slug */
	tag?:string | null,
	/** Use Tag ID */
	tagId?:string | null,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?:(string | undefined | null)[],
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?:(string | undefined | null)[],
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?:(string | undefined | null)[],
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?:(string | undefined | null)[],
	/** Title of the object */
	title?:string | null
};
	/** Connection between the category type and the post type */
["CategoryToPostConnection"]: AliasType<{
	/** Edges for the CategoryToPostConnection connection */
	edges?:ValueTypes["CategoryToPostConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Post"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["CategoryToPostConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** Connection between the category type and the Taxonomy type */
["CategoryToTaxonomyConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Taxonomy"],
		__typename?: boolean
}>;
	/** Arguments for filtering the PostToCommentConnection connection */
["PostToCommentConnectionWhereArgs"]: {
	/** Comment author email address. */
	authorEmail?:string | null,
	/** Array of author IDs to include comments for. */
	authorIn?:(string | undefined | null)[],
	/** Array of author IDs to exclude comments for. */
	authorNotIn?:(string | undefined | null)[],
	/** Comment author URL. */
	authorUrl?:string | null,
	/** Array of comment IDs to include. */
	commentIn?:(string | undefined | null)[],
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?:(string | undefined | null)[],
	/** Include comments of a given type. */
	commentType?:string | null,
	/** Include comments from a given array of comment types. */
	commentTypeIn?:(string | undefined | null)[],
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?:string | null,
	/** Content object author ID to limit results by. */
	contentAuthor?:(string | undefined | null)[],
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?:(string | undefined | null)[],
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?:(string | undefined | null)[],
	/** Limit results to those affiliated with a given content object ID. */
	contentId?:string | null,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?:(string | undefined | null)[],
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?:(string | undefined | null)[],
	/** Content object name to retrieve affiliated comments for. */
	contentName?:string | null,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?:number | null,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?:(string | undefined | null)[],
	/** Karma score to retrieve matching comments for. */
	karma?:number | null,
	/** The cardinality of the order of the connection */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field to order the comments by. */
	orderby?:ValueTypes["CommentsConnectionOrderbyEnum"] | null,
	/** Parent ID of comment to retrieve children of. */
	parent?:number | null,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?:(string | undefined | null)[],
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?:(string | undefined | null)[],
	/** Search term(s) to retrieve matching comments for. */
	search?:string | null,
	/** Comment status to limit results by. */
	status?:string | null,
	/** Include comments for a specific user ID. */
	userId?:string | null
};
	/** Connection between the post type and the Comment type */
["PostToCommentConnection"]: AliasType<{
	/** Edges for the PostToCommentConnection connection */
	edges?:ValueTypes["PostToCommentConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Comment"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PostToCommentConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Comment"],
		__typename?: boolean
}>;
	/** Arguments for filtering the PostToPostFormatConnection connection */
["PostToPostFormatConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Connection between the post type and the postFormat type */
["PostToPostFormatConnection"]: AliasType<{
	/** Edges for the PostToPostFormatConnection connection */
	edges?:ValueTypes["PostToPostFormatConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["PostFormat"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PostToPostFormatConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["PostFormat"],
		__typename?: boolean
}>;
	/** The postFormat type */
["PostFormat"]: AliasType<{
	conditionalTags?:ValueTypes["ConditionalTags"],
contentNodes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PostFormatToContentNodeConnectionWhereArgs"] | null},ValueTypes["PostFormatToContentNodeConnection"]],
	/** The number of objects connected to the object */
	count?:boolean,
	/** The unique identifier stored in the database */
	databaseId?:boolean,
	/** The description of the object */
	description?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TermNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TermNodeToEnqueuedStylesheetConnection"]],
	/** The unique resource identifier path */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The link to the term */
	link?:boolean,
	/** The human friendly name of the object. */
	name?:boolean,
	/** The id field matches the WP_Post-&gt;ID field. */
	postFormatId?:boolean,
posts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["PostFormatToPostConnectionWhereArgs"] | null},ValueTypes["PostFormatToPostConnection"]],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?:boolean,
	/** Connection between the postFormat type and the Taxonomy type */
	taxonomy?:ValueTypes["PostFormatToTaxonomyConnectionEdge"],
	templates?:boolean,
	/** The ID of the term group that this term object belongs to */
	termGroupId?:boolean,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?:boolean,
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** Arguments for filtering the PostFormatToContentNodeConnection connection */
["PostFormatToContentNodeConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypesOfPostFormatEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Allowed Content Types of the PostFormat taxonomy. */
["ContentTypesOfPostFormatEnum"]:ContentTypesOfPostFormatEnum;
	/** Connection between the postFormat type and the ContentNode type */
["PostFormatToContentNodeConnection"]: AliasType<{
	/** Edges for the PostFormatToContentNodeConnection connection */
	edges?:ValueTypes["PostFormatToContentNodeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PostFormatToContentNodeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** Arguments for filtering the PostFormatToPostConnection connection */
["PostFormatToPostConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Category ID */
	categoryId?:number | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?:(string | undefined | null)[],
	/** Use Category Slug */
	categoryName?:string | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Tag Slug */
	tag?:string | null,
	/** Use Tag ID */
	tagId?:string | null,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?:(string | undefined | null)[],
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?:(string | undefined | null)[],
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?:(string | undefined | null)[],
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?:(string | undefined | null)[],
	/** Title of the object */
	title?:string | null
};
	/** Connection between the postFormat type and the post type */
["PostFormatToPostConnection"]: AliasType<{
	/** Edges for the PostFormatToPostConnection connection */
	edges?:ValueTypes["PostFormatToPostConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Post"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PostFormatToPostConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** Connection between the postFormat type and the Taxonomy type */
["PostFormatToTaxonomyConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Taxonomy"],
		__typename?: boolean
}>;
	/** Connection between the post type and the post type */
["PostToPreviewConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** Arguments for filtering the postToRevisionConnection connection */
["PostToRevisionConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Category ID */
	categoryId?:number | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?:(string | undefined | null)[],
	/** Use Category Slug */
	categoryName?:string | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Tag Slug */
	tag?:string | null,
	/** Use Tag ID */
	tagId?:string | null,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?:(string | undefined | null)[],
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?:(string | undefined | null)[],
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?:(string | undefined | null)[],
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?:(string | undefined | null)[],
	/** Title of the object */
	title?:string | null
};
	/** Connection between the post type and the post type */
["PostToRevisionConnection"]: AliasType<{
	/** Edges for the postToRevisionConnection connection */
	edges?:ValueTypes["PostToRevisionConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Post"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PostToRevisionConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** Arguments for filtering the PostToTagConnection connection */
["PostToTagConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Connection between the post type and the tag type */
["PostToTagConnection"]: AliasType<{
	/** Edges for the PostToTagConnection connection */
	edges?:ValueTypes["PostToTagConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Tag"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PostToTagConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Tag"],
		__typename?: boolean
}>;
	/** The tag type */
["Tag"]: AliasType<{
	conditionalTags?:ValueTypes["ConditionalTags"],
contentNodes?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["TagToContentNodeConnectionWhereArgs"] | null},ValueTypes["TagToContentNodeConnection"]],
	/** The number of objects connected to the object */
	count?:boolean,
	/** The unique resource identifier path */
	databaseId?:boolean,
	/** The description of the object */
	description?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TermNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["TermNodeToEnqueuedStylesheetConnection"]],
	/** The unique resource identifier path */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The link to the term */
	link?:boolean,
	/** The human friendly name of the object. */
	name?:boolean,
posts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["TagToPostConnectionWhereArgs"] | null},ValueTypes["TagToPostConnection"]],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?:boolean,
	/** The id field matches the WP_Post-&gt;ID field. */
	tagId?:boolean,
	/** Connection between the tag type and the Taxonomy type */
	taxonomy?:ValueTypes["TagToTaxonomyConnectionEdge"],
	templates?:boolean,
	/** The ID of the term group that this term object belongs to */
	termGroupId?:boolean,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?:boolean,
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** Arguments for filtering the TagToContentNodeConnection connection */
["TagToContentNodeConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypesOfTagEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Allowed Content Types of the Tag taxonomy. */
["ContentTypesOfTagEnum"]:ContentTypesOfTagEnum;
	/** Connection between the tag type and the ContentNode type */
["TagToContentNodeConnection"]: AliasType<{
	/** Edges for the TagToContentNodeConnection connection */
	edges?:ValueTypes["TagToContentNodeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["TagToContentNodeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** Arguments for filtering the TagToPostConnection connection */
["TagToPostConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Category ID */
	categoryId?:number | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?:(string | undefined | null)[],
	/** Use Category Slug */
	categoryName?:string | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Tag Slug */
	tag?:string | null,
	/** Use Tag ID */
	tagId?:string | null,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?:(string | undefined | null)[],
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?:(string | undefined | null)[],
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?:(string | undefined | null)[],
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?:(string | undefined | null)[],
	/** Title of the object */
	title?:string | null
};
	/** Connection between the tag type and the post type */
["TagToPostConnection"]: AliasType<{
	/** Edges for the TagToPostConnection connection */
	edges?:ValueTypes["TagToPostConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Post"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["TagToPostConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** Connection between the tag type and the Taxonomy type */
["TagToTaxonomyConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Taxonomy"],
		__typename?: boolean
}>;
	/** Arguments for filtering the PostToTermNodeConnection connection */
["PostToTermNodeConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** The Taxonomy to filter terms by */
	taxonomies?:(ValueTypes["TaxonomyEnum"] | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Allowed taxonomies */
["TaxonomyEnum"]:TaxonomyEnum;
	/** Connection between the post type and the TermNode type */
["PostToTermNodeConnection"]: AliasType<{
	/** Edges for the PostToTermNodeConnection connection */
	edges?:ValueTypes["PostToTermNodeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["TermNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["PostToTermNodeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["TermNode"],
		__typename?: boolean
}>;
	/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
["UserToContentRevisionUnionConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the User type and the ContentRevisionUnion type */
["UserToContentRevisionUnionConnection"]: AliasType<{
	/** Edges for the UserToContentRevisionUnionConnection connection */
	edges?:ValueTypes["UserToContentRevisionUnionConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentRevisionUnion"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToContentRevisionUnionConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentRevisionUnion"],
		__typename?: boolean
}>;
	/** A union of Content Node Types that support revisions */
["ContentRevisionUnion"]: AliasType<{		["...on Post"] : ValueTypes["Post"],
		["...on Page"] : ValueTypes["Page"]
		__typename?: boolean
}>;
	/** Connection between the User type and the UserRole type */
["UserToUserRoleConnection"]: AliasType<{
	/** Edges for the UserToUserRoleConnection connection */
	edges?:ValueTypes["UserToUserRoleConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["UserRole"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["UserToUserRoleConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["UserRole"],
		__typename?: boolean
}>;
	/** A user role object */
["UserRole"]: AliasType<{
	/** The capabilities that belong to this role */
	capabilities?:boolean,
	/** The display name of the role */
	displayName?:boolean,
	/** The globally unique identifier for the user role object. */
	id?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** The registered name of the role */
	name?:boolean,
		__typename?: boolean
}>;
	/** Connection between the badge type and the hero type */
["BadgeToHeroConnection"]: AliasType<{
	/** Edges for the BadgeToHeroConnection connection */
	edges?:ValueTypes["BadgeToHeroConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Hero"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["BadgeToHeroConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Hero"],
		__typename?: boolean
}>;
	/** Connection between the badge type and the badge type */
["BadgeToPreviewConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Badge"],
		__typename?: boolean
}>;
	/** Arguments for filtering the RootQueryToBadgeConnection connection */
["RootQueryToBadgeConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the RootQuery type and the badge type */
["RootQueryToBadgeConnection"]: AliasType<{
	/** Edges for the RootQueryToBadgeConnection connection */
	edges?:ValueTypes["RootQueryToBadgeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Badge"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToBadgeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Badge"],
		__typename?: boolean
}>;
	/** Arguments for filtering the RootQueryToCategoryConnection connection */
["RootQueryToCategoryConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Connection between the RootQuery type and the category type */
["RootQueryToCategoryConnection"]: AliasType<{
	/** Edges for the RootQueryToCategoryConnection connection */
	edges?:ValueTypes["RootQueryToCategoryConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Category"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToCategoryConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Category"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["CategoryIdType"]:CategoryIdType;
	/** Arguments for filtering the RootQueryToCommentConnection connection */
["RootQueryToCommentConnectionWhereArgs"]: {
	/** Comment author email address. */
	authorEmail?:string | null,
	/** Array of author IDs to include comments for. */
	authorIn?:(string | undefined | null)[],
	/** Array of author IDs to exclude comments for. */
	authorNotIn?:(string | undefined | null)[],
	/** Comment author URL. */
	authorUrl?:string | null,
	/** Array of comment IDs to include. */
	commentIn?:(string | undefined | null)[],
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?:(string | undefined | null)[],
	/** Include comments of a given type. */
	commentType?:string | null,
	/** Include comments from a given array of comment types. */
	commentTypeIn?:(string | undefined | null)[],
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?:string | null,
	/** Content object author ID to limit results by. */
	contentAuthor?:(string | undefined | null)[],
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?:(string | undefined | null)[],
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?:(string | undefined | null)[],
	/** Limit results to those affiliated with a given content object ID. */
	contentId?:string | null,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?:(string | undefined | null)[],
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?:(string | undefined | null)[],
	/** Content object name to retrieve affiliated comments for. */
	contentName?:string | null,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?:number | null,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?:(string | undefined | null)[],
	/** Karma score to retrieve matching comments for. */
	karma?:number | null,
	/** The cardinality of the order of the connection */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field to order the comments by. */
	orderby?:ValueTypes["CommentsConnectionOrderbyEnum"] | null,
	/** Parent ID of comment to retrieve children of. */
	parent?:number | null,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?:(string | undefined | null)[],
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?:(string | undefined | null)[],
	/** Search term(s) to retrieve matching comments for. */
	search?:string | null,
	/** Comment status to limit results by. */
	status?:string | null,
	/** Include comments for a specific user ID. */
	userId?:string | null
};
	/** Connection between the RootQuery type and the Comment type */
["RootQueryToCommentConnection"]: AliasType<{
	/** Edges for the RootQueryToCommentConnection connection */
	edges?:ValueTypes["RootQueryToCommentConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Comment"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToCommentConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Comment"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["ContentNodeIdTypeEnum"]:ContentNodeIdTypeEnum;
	/** Arguments for filtering the RootQueryToContentNodeConnection connection */
["RootQueryToContentNodeConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the RootQuery type and the ContentNode type */
["RootQueryToContentNodeConnection"]: AliasType<{
	/** Edges for the RootQueryToContentNodeConnection connection */
	edges?:ValueTypes["RootQueryToContentNodeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToContentNodeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentNode"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
["ContentTypeIdTypeEnum"]:ContentTypeIdTypeEnum;
	/** Connection between the RootQuery type and the ContentType type */
["RootQueryToContentTypeConnection"]: AliasType<{
	/** Edges for the RootQueryToContentTypeConnection connection */
	edges?:ValueTypes["RootQueryToContentTypeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentType"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToContentTypeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentType"],
		__typename?: boolean
}>;
	/** The discussion setting type */
["DiscussionSettings"]: AliasType<{
	/** Allow people to submit comments on new posts. */
	defaultCommentStatus?:boolean,
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	defaultPingStatus?:boolean,
		__typename?: boolean
}>;
	/** The general setting type */
["GeneralSettings"]: AliasType<{
	/** A date format for all date strings. */
	dateFormat?:boolean,
	/** Site tagline. */
	description?:boolean,
	/** This address is used for admin purposes, like new user notification. */
	email?:boolean,
	/** WordPress locale code. */
	language?:boolean,
	/** A day number of the week that the week should start on. */
	startOfWeek?:boolean,
	/** A time format for all time strings. */
	timeFormat?:boolean,
	/** A city in the same timezone as you. */
	timezone?:boolean,
	/** Site title. */
	title?:boolean,
	/** Site URL. */
	url?:boolean,
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["HeroIdType"]:HeroIdType;
	/** Arguments for filtering the RootQueryToHeroConnection connection */
["RootQueryToHeroConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the RootQuery type and the hero type */
["RootQueryToHeroConnection"]: AliasType<{
	/** Edges for the RootQueryToHeroConnection connection */
	edges?:ValueTypes["RootQueryToHeroConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Hero"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToHeroConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Hero"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["MediaItemIdType"]:MediaItemIdType;
	/** Arguments for filtering the RootQueryToMediaItemConnection connection */
["RootQueryToMediaItemConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the RootQuery type and the mediaItem type */
["RootQueryToMediaItemConnection"]: AliasType<{
	/** Edges for the RootQueryToMediaItemConnection connection */
	edges?:ValueTypes["RootQueryToMediaItemConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["MediaItem"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToMediaItemConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["MediaItem"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
["MenuNodeIdTypeEnum"]:MenuNodeIdTypeEnum;
	/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
["Menu"]: AliasType<{
	/** The number of items in the menu */
	count?:boolean,
	/** The unique identifier stored in the database */
	databaseId?:boolean,
	/** The globally unique identifier of the nav menu object. */
	id?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** The locations a menu is assigned to */
	locations?:boolean,
	/** WP ID of the nav menu. */
	menuId?:boolean,
menuItems?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["MenuToMenuItemConnectionWhereArgs"] | null},ValueTypes["MenuToMenuItemConnection"]],
	/** Display name of the menu. Equivalent to WP_Term-&gt;name. */
	name?:boolean,
	/** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
	slug?:boolean,
		__typename?: boolean
}>;
	/** Registered menu locations */
["MenuLocationEnum"]:MenuLocationEnum;
	/** Arguments for filtering the MenuToMenuItemConnection connection */
["MenuToMenuItemConnectionWhereArgs"]: {
	/** The ID of the object */
	id?:number | null,
	/** The menu location for the menu being queried */
	location?:ValueTypes["MenuLocationEnum"] | null,
	/** The database ID of the parent menu object */
	parentDatabaseId?:number | null,
	/** The ID of the parent menu object */
	parentId?:string | null
};
	/** Connection between the Menu type and the MenuItem type */
["MenuToMenuItemConnection"]: AliasType<{
	/** Edges for the MenuToMenuItemConnection connection */
	edges?:ValueTypes["MenuToMenuItemConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["MenuItem"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["MenuToMenuItemConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
["MenuItem"]: AliasType<{
childItems?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null,	/** Arguments for filtering the connection */
	where?:ValueTypes["MenuItemToMenuItemConnectionWhereArgs"] | null},ValueTypes["MenuItemToMenuItemConnection"]],
	/** Connection from MenuItem to it&#039;s connected node */
	connectedNode?:ValueTypes["MenuItemToMenuItemLinkableConnectionEdge"],
	/** The object connected to this menu item. */
	connectedObject?:ValueTypes["MenuItemObjectUnion"],
	/** Class attribute for the menu item link */
	cssClasses?:boolean,
	/** The unique identifier stored in the database */
	databaseId?:boolean,
	/** Description of the menu item. */
	description?:boolean,
	/** The globally unique identifier of the nav menu item object. */
	id?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Label or title of the menu item. */
	label?:boolean,
	/** Link relationship (XFN) of the menu item. */
	linkRelationship?:boolean,
	/** The locations the menu item&#039;s Menu is assigned to */
	locations?:boolean,
	/** The Menu a MenuItem is part of */
	menu?:ValueTypes["MenuItemToMenuConnectionEdge"],
	/** WP ID of the menu item. */
	menuItemId?:boolean,
	/** Menu item order */
	order?:boolean,
	/** The database id of the parent menu item or null if it is the root */
	parentDatabaseId?:boolean,
	/** The globally unique identifier of the parent nav menu item object. */
	parentId?:boolean,
	/** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
	path?:boolean,
	/** Target attribute for the menu item link. */
	target?:boolean,
	/** Title attribute for the menu item link */
	title?:boolean,
	/** URL or destination of the menu item. */
	url?:boolean,
		__typename?: boolean
}>;
	/** Arguments for filtering the MenuItemToMenuItemConnection connection */
["MenuItemToMenuItemConnectionWhereArgs"]: {
	/** The ID of the object */
	id?:number | null,
	/** The menu location for the menu being queried */
	location?:ValueTypes["MenuLocationEnum"] | null,
	/** The database ID of the parent menu object */
	parentDatabaseId?:number | null,
	/** The ID of the parent menu object */
	parentId?:string | null
};
	/** Connection between the MenuItem type and the MenuItem type */
["MenuItemToMenuItemConnection"]: AliasType<{
	/** Edges for the MenuItemToMenuItemConnection connection */
	edges?:ValueTypes["MenuItemToMenuItemConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["MenuItem"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["MenuItemToMenuItemConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	/** Connection between the MenuItem type and the MenuItemLinkable type */
["MenuItemToMenuItemLinkableConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["MenuItemLinkable"],
		__typename?: boolean
}>;
	/** Deprecated in favor of MenuItemLinkeable Interface */
["MenuItemObjectUnion"]: AliasType<{		["...on Post"] : ValueTypes["Post"],
		["...on Page"] : ValueTypes["Page"],
		["...on Movie"] : ValueTypes["Movie"],
		["...on Category"] : ValueTypes["Category"],
		["...on Tag"] : ValueTypes["Tag"]
		__typename?: boolean
}>;
	/** The Movie type */
["Movie"]: AliasType<{
	/** The id field matches the WP_Post-&gt;ID field. */
	movieId?:boolean,
	conditionalTags?:ValueTypes["ConditionalTags"],
content?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ValueTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId?:boolean,
	/** Post publishing date. */
	date?:boolean,
	/** The publishing date set in GMT. */
	dateGmt?:boolean,
	/** The desired slug of the post */
	desiredSlug?:boolean,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ValueTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:boolean,
enqueuedScripts?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedScriptConnection"]],
enqueuedStylesheets?: [{	/** The number of items to return after the referenced "after" cursor */
	first?:number | null,	/** The number of items to return before the referenced "before" cursor */
	last?:number | null,	/** Cursor used along with the "first" argument to reference where in the dataset to get data */
	after?:string | null,	/** Cursor used along with the "last" argument to reference where in the dataset to get data */
	before?:string | null},ValueTypes["ContentNodeToEnqueuedStylesheetConnection"]],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?:ValueTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?:boolean,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?:boolean,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:boolean,
	/** The globally unique identifier of the movie object. */
	id?:boolean,
	/** Whether the node is a Content Node */
	isContentNode?:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode?:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ValueTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:boolean,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:boolean,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:boolean,
	/** Connection between the Movie type and the Movie type */
	preview?:ValueTypes["MovieToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:boolean,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:boolean,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:boolean,
	/** The current status of the object */
	status?:boolean,
	/** The template assigned to a node of content */
	template?:ValueTypes["ContentTemplate"],
	templates?:boolean,
title?: [{	/** Format of the field output */
	format?:ValueTypes["PostObjectFieldFormatEnum"] | null},boolean],
	/** The unique resource identifier path */
	uri?:boolean,
		__typename?: boolean
}>;
	/** Connection between the Movie type and the Movie type */
["MovieToPreviewConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Movie"],
		__typename?: boolean
}>;
	/** Connection between the MenuItem type and the Menu type */
["MenuItemToMenuConnectionEdge"]: AliasType<{
	/** The node of the connection, without the edges */
	node?:ValueTypes["Menu"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
["MenuItemNodeIdTypeEnum"]:MenuItemNodeIdTypeEnum;
	/** Arguments for filtering the RootQueryToMenuItemConnection connection */
["RootQueryToMenuItemConnectionWhereArgs"]: {
	/** The ID of the object */
	id?:number | null,
	/** The menu location for the menu being queried */
	location?:ValueTypes["MenuLocationEnum"] | null,
	/** The database ID of the parent menu object */
	parentDatabaseId?:number | null,
	/** The ID of the parent menu object */
	parentId?:string | null
};
	/** Connection between the RootQuery type and the MenuItem type */
["RootQueryToMenuItemConnection"]: AliasType<{
	/** Edges for the RootQueryToMenuItemConnection connection */
	edges?:ValueTypes["RootQueryToMenuItemConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["MenuItem"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToMenuItemConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["MenuItem"],
		__typename?: boolean
}>;
	/** Arguments for filtering the RootQueryToMenuConnection connection */
["RootQueryToMenuConnectionWhereArgs"]: {
	/** The ID of the object */
	id?:number | null,
	/** The menu location for the menu being queried */
	location?:ValueTypes["MenuLocationEnum"] | null,
	/** The slug of the menu to query items for */
	slug?:string | null
};
	/** Connection between the RootQuery type and the Menu type */
["RootQueryToMenuConnection"]: AliasType<{
	/** Edges for the RootQueryToMenuConnection connection */
	edges?:ValueTypes["RootQueryToMenuConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Menu"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToMenuConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Menu"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["MovieIdType"]:MovieIdType;
	/** Arguments for filtering the RootQueryToMovieConnection connection */
["RootQueryToMovieConnectionWhereArgs"]: {
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the RootQuery type and the Movie type */
["RootQueryToMovieConnection"]: AliasType<{
	/** Edges for the RootQueryToMovieConnection connection */
	edges?:ValueTypes["RootQueryToMovieConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Movie"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToMovieConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Movie"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PageIdType"]:PageIdType;
	/** Arguments for filtering the RootQueryToPageConnection connection */
["RootQueryToPageConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the RootQuery type and the page type */
["RootQueryToPageConnection"]: AliasType<{
	/** Edges for the RootQueryToPageConnection connection */
	edges?:ValueTypes["RootQueryToPageConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Page"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToPageConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Page"],
		__typename?: boolean
}>;
	/** An plugin object */
["Plugin"]: AliasType<{
	/** Name of the plugin author(s), may also be a company name. */
	author?:boolean,
	/** URI for the related author(s)/company website. */
	authorUri?:boolean,
	/** Description of the plugin. */
	description?:boolean,
	/** The globally unique identifier of the plugin object. */
	id?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Display name of the plugin. */
	name?:boolean,
	/** Plugin path. */
	path?:boolean,
	/** URI for the plugin website. This is useful for directing users for support requests etc. */
	pluginUri?:boolean,
	/** Current version of the plugin. */
	version?:boolean,
		__typename?: boolean
}>;
	/** Connection between the RootQuery type and the Plugin type */
["RootQueryToPluginConnection"]: AliasType<{
	/** Edges for the RootQueryToPluginConnection connection */
	edges?:ValueTypes["RootQueryToPluginConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Plugin"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToPluginConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Plugin"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PostIdType"]:PostIdType;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PostFormatIdType"]:PostFormatIdType;
	/** Arguments for filtering the RootQueryToPostFormatConnection connection */
["RootQueryToPostFormatConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Connection between the RootQuery type and the postFormat type */
["RootQueryToPostFormatConnection"]: AliasType<{
	/** Edges for the RootQueryToPostFormatConnection connection */
	edges?:ValueTypes["RootQueryToPostFormatConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["PostFormat"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToPostFormatConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["PostFormat"],
		__typename?: boolean
}>;
	/** Arguments for filtering the RootQueryToPostConnection connection */
["RootQueryToPostConnectionWhereArgs"]: {
	/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?:number | null,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?:(string | undefined | null)[],
	/** Find objects connected to the author by the author's nicename */
	authorName?:string | null,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?:(string | undefined | null)[],
	/** Category ID */
	categoryId?:number | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?:(string | undefined | null)[],
	/** Use Category Slug */
	categoryName?:string | null,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?:(string | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Tag Slug */
	tag?:string | null,
	/** Use Tag ID */
	tagId?:string | null,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?:(string | undefined | null)[],
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?:(string | undefined | null)[],
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?:(string | undefined | null)[],
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?:(string | undefined | null)[],
	/** Title of the object */
	title?:string | null
};
	/** Connection between the RootQuery type and the post type */
["RootQueryToPostConnection"]: AliasType<{
	/** Edges for the RootQueryToPostConnection connection */
	edges?:ValueTypes["RootQueryToPostConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Post"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToPostConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** The reading setting type */
["ReadingSettings"]: AliasType<{
	/** Blog pages show at most. */
	postsPerPage?:boolean,
		__typename?: boolean
}>;
	/** Connection between the RootQuery type and the EnqueuedScript type */
["RootQueryToEnqueuedScriptConnection"]: AliasType<{
	/** Edges for the RootQueryToEnqueuedScriptConnection connection */
	edges?:ValueTypes["RootQueryToEnqueuedScriptConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["EnqueuedScript"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToEnqueuedScriptConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["EnqueuedScript"],
		__typename?: boolean
}>;
	/** Connection between the RootQuery type and the EnqueuedStylesheet type */
["RootQueryToEnqueuedStylesheetConnection"]: AliasType<{
	/** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
	edges?:ValueTypes["RootQueryToEnqueuedStylesheetConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["EnqueuedStylesheet"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToEnqueuedStylesheetConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["EnqueuedStylesheet"],
		__typename?: boolean
}>;
	/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
["RootQueryToContentRevisionUnionConnectionWhereArgs"]: {
	/** The Types of content to filter */
	contentTypes?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Filter the connection based on dates */
	dateQuery?:ValueTypes["DateQueryInput"] | null,
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?:boolean | null,
	/** Specific ID of the object */
	id?:number | null,
	/** Array of IDs for the objects to retrieve */
	in?:(string | undefined | null)[],
	/** Get objects with a specific mimeType property */
	mimeType?:ValueTypes["MimeTypeEnum"] | null,
	/** Slug / post_name of the object */
	name?:string | null,
	/** Specify objects to retrieve. Use slugs */
	nameIn?:(string | undefined | null)[],
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["PostObjectsConnectionOrderbyInput"] | undefined | null)[],
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?:string | null,
	/** Specify objects whose parent is in an array */
	parentIn?:(string | undefined | null)[],
	/** Specify posts whose parent is not in an array */
	parentNotIn?:(string | undefined | null)[],
	/** Show posts with a specific password. */
	password?:string | null,
	/** Show Posts based on a keyword search */
	search?:string | null,
	/** Retrieve posts where post status is in an array. */
	stati?:(ValueTypes["PostStatusEnum"] | undefined | null)[],
	/** Show posts with a specific status. */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Title of the object */
	title?:string | null
};
	/** Connection between the RootQuery type and the ContentRevisionUnion type */
["RootQueryToContentRevisionUnionConnection"]: AliasType<{
	/** Edges for the RootQueryToContentRevisionUnionConnection connection */
	edges?:ValueTypes["RootQueryToContentRevisionUnionConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["ContentRevisionUnion"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToContentRevisionUnionConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["ContentRevisionUnion"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["TagIdType"]:TagIdType;
	/** Arguments for filtering the RootQueryToTagConnection connection */
["RootQueryToTagConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Connection between the RootQuery type and the tag type */
["RootQueryToTagConnection"]: AliasType<{
	/** Edges for the RootQueryToTagConnection connection */
	edges?:ValueTypes["RootQueryToTagConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Tag"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToTagConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Tag"],
		__typename?: boolean
}>;
	/** Connection between the RootQuery type and the Taxonomy type */
["RootQueryToTaxonomyConnection"]: AliasType<{
	/** Edges for the RootQueryToTaxonomyConnection connection */
	edges?:ValueTypes["RootQueryToTaxonomyConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Taxonomy"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToTaxonomyConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Taxonomy"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
["TaxonomyIdTypeEnum"]:TaxonomyIdTypeEnum;
	/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
["TermNodeIdTypeEnum"]:TermNodeIdTypeEnum;
	/** Arguments for filtering the RootQueryToTermNodeConnection connection */
["RootQueryToTermNodeConnectionWhereArgs"]: {
	/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?:string | null,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?:number | null,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?:boolean | null,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?:string | null,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?:(string | undefined | null)[],
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?:(string | undefined | null)[],
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?:boolean | null,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?:boolean | null,
	/** Array of term ids to include. Default empty array. */
	include?:(string | undefined | null)[],
	/** Array of names to return term(s) for. Default empty. */
	name?:(string | undefined | null)[],
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?:string | null,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?:(string | undefined | null)[],
	/** Direction the connection should be ordered in */
	order?:ValueTypes["OrderEnum"] | null,
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?:ValueTypes["TermObjectsConnectionOrderbyEnum"] | null,
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?:boolean | null,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?:number | null,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?:string | null,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?:(string | undefined | null)[],
	/** The Taxonomy to filter terms by */
	taxonomies?:(ValueTypes["TaxonomyEnum"] | undefined | null)[],
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?:(string | undefined | null)[],
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?:boolean | null
};
	/** Connection between the RootQuery type and the TermNode type */
["RootQueryToTermNodeConnection"]: AliasType<{
	/** Edges for the RootQueryToTermNodeConnection connection */
	edges?:ValueTypes["RootQueryToTermNodeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["TermNode"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToTermNodeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["TermNode"],
		__typename?: boolean
}>;
	/** A theme object */
["Theme"]: AliasType<{
	/** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
	author?:boolean,
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
	authorUri?:boolean,
	/** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
	description?:boolean,
	/** The globally unique identifier of the theme object. */
	id?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
	name?:boolean,
	/** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
	screenshot?:boolean,
	/** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
	slug?:boolean,
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
	tags?:boolean,
	/** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
	themeUri?:boolean,
	/** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
	version?:boolean,
		__typename?: boolean
}>;
	/** Connection between the RootQuery type and the Theme type */
["RootQueryToThemeConnection"]: AliasType<{
	/** Edges for the RootQueryToThemeConnection connection */
	edges?:ValueTypes["RootQueryToThemeConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["Theme"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToThemeConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["Theme"],
		__typename?: boolean
}>;
	/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
["UserNodeIdTypeEnum"]:UserNodeIdTypeEnum;
	/** Connection between the RootQuery type and the UserRole type */
["RootQueryToUserRoleConnection"]: AliasType<{
	/** Edges for the RootQueryToUserRoleConnection connection */
	edges?:ValueTypes["RootQueryToUserRoleConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["UserRole"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToUserRoleConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["UserRole"],
		__typename?: boolean
}>;
	/** Arguments for filtering the RootQueryToUserConnection connection */
["RootQueryToUserConnectionWhereArgs"]: {
	/** Array of userIds to exclude. */
	exclude?:(number | undefined | null)[],
	/** Pass an array of post types to filter results to users who have published posts in those post types. */
	hasPublishedPosts?:(ValueTypes["ContentTypeEnum"] | undefined | null)[],
	/** Array of userIds to include. */
	include?:(number | undefined | null)[],
	/** The user login. */
	login?:string | null,
	/** An array of logins to include. Users matching one of these logins will be included in results. */
	loginIn?:(string | undefined | null)[],
	/** An array of logins to exclude. Users matching one of these logins will not be included in results. */
	loginNotIn?:(string | undefined | null)[],
	/** The user nicename. */
	nicename?:string | null,
	/** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
	nicenameIn?:(string | undefined | null)[],
	/** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
	nicenameNotIn?:(string | undefined | null)[],
	/** What paramater to use to order the objects by. */
	orderby?:(ValueTypes["UsersConnectionOrderbyInput"] | undefined | null)[],
	/** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
	role?:ValueTypes["UserRoleEnum"] | null,
	/** An array of role names. Matched users must have at least one of these roles. */
	roleIn?:(ValueTypes["UserRoleEnum"] | undefined | null)[],
	/** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
	roleNotIn?:(ValueTypes["UserRoleEnum"] | undefined | null)[],
	/** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
	search?:string | null,
	/** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
	searchColumns?:(ValueTypes["UsersConnectionSearchColumnEnum"] | undefined | null)[]
};
	/** Options for ordering the connection */
["UsersConnectionOrderbyInput"]: {
	/** The field name used to sort the results. */
	field:ValueTypes["UsersConnectionOrderbyEnum"],
	/** The cardinality of the order of the connection */
	order?:ValueTypes["OrderEnum"] | null
};
	/** Field to order the connection by */
["UsersConnectionOrderbyEnum"]:UsersConnectionOrderbyEnum;
	/** Names of available user roles */
["UserRoleEnum"]:UserRoleEnum;
	/** Column used for searching for users. */
["UsersConnectionSearchColumnEnum"]:UsersConnectionSearchColumnEnum;
	/** Connection between the RootQuery type and the User type */
["RootQueryToUserConnection"]: AliasType<{
	/** Edges for the RootQueryToUserConnection connection */
	edges?:ValueTypes["RootQueryToUserConnectionEdge"],
	/** The nodes of the connection, without the edges */
	nodes?:ValueTypes["User"],
	/** Information about pagination in a connection. */
	pageInfo?:ValueTypes["WPPageInfo"],
		__typename?: boolean
}>;
	/** An edge in a connection */
["RootQueryToUserConnectionEdge"]: AliasType<{
	/** A cursor for use in pagination */
	cursor?:boolean,
	/** The item at the end of the edge */
	node?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** The writing setting type */
["WritingSettings"]: AliasType<{
	/** Default post category. */
	defaultCategory?:boolean,
	/** Default post format. */
	defaultPostFormat?:boolean,
	/** Convert emoticons like :-) and :-P to graphics on display. */
	useSmilies?:boolean,
		__typename?: boolean
}>;
	/** The root mutation */
["RootMutation"]: AliasType<{
createBadge?: [{	/** Input for the createBadge mutation */
	input:ValueTypes["CreateBadgeInput"]},ValueTypes["CreateBadgePayload"]],
createCategory?: [{	/** Input for the createCategory mutation */
	input:ValueTypes["CreateCategoryInput"]},ValueTypes["CreateCategoryPayload"]],
createComment?: [{	/** Input for the createComment mutation */
	input:ValueTypes["CreateCommentInput"]},ValueTypes["CreateCommentPayload"]],
createHero?: [{	/** Input for the createHero mutation */
	input:ValueTypes["CreateHeroInput"]},ValueTypes["CreateHeroPayload"]],
createMediaItem?: [{	/** Input for the createMediaItem mutation */
	input:ValueTypes["CreateMediaItemInput"]},ValueTypes["CreateMediaItemPayload"]],
createMovie?: [{	/** Input for the createMovie mutation */
	input:ValueTypes["CreateMovieInput"]},ValueTypes["CreateMoviePayload"]],
createPage?: [{	/** Input for the createPage mutation */
	input:ValueTypes["CreatePageInput"]},ValueTypes["CreatePagePayload"]],
createPost?: [{	/** Input for the createPost mutation */
	input:ValueTypes["CreatePostInput"]},ValueTypes["CreatePostPayload"]],
createPostFormat?: [{	/** Input for the createPostFormat mutation */
	input:ValueTypes["CreatePostFormatInput"]},ValueTypes["CreatePostFormatPayload"]],
createTag?: [{	/** Input for the createTag mutation */
	input:ValueTypes["CreateTagInput"]},ValueTypes["CreateTagPayload"]],
createUser?: [{	/** Input for the createUser mutation */
	input:ValueTypes["CreateUserInput"]},ValueTypes["CreateUserPayload"]],
deleteBadge?: [{	/** Input for the deleteBadge mutation */
	input:ValueTypes["DeleteBadgeInput"]},ValueTypes["DeleteBadgePayload"]],
deleteCategory?: [{	/** Input for the deleteCategory mutation */
	input:ValueTypes["DeleteCategoryInput"]},ValueTypes["DeleteCategoryPayload"]],
deleteComment?: [{	/** Input for the deleteComment mutation */
	input:ValueTypes["DeleteCommentInput"]},ValueTypes["DeleteCommentPayload"]],
deleteHero?: [{	/** Input for the deleteHero mutation */
	input:ValueTypes["DeleteHeroInput"]},ValueTypes["DeleteHeroPayload"]],
deleteMediaItem?: [{	/** Input for the deleteMediaItem mutation */
	input:ValueTypes["DeleteMediaItemInput"]},ValueTypes["DeleteMediaItemPayload"]],
deleteMovie?: [{	/** Input for the deleteMovie mutation */
	input:ValueTypes["DeleteMovieInput"]},ValueTypes["DeleteMoviePayload"]],
deletePage?: [{	/** Input for the deletePage mutation */
	input:ValueTypes["DeletePageInput"]},ValueTypes["DeletePagePayload"]],
deletePost?: [{	/** Input for the deletePost mutation */
	input:ValueTypes["DeletePostInput"]},ValueTypes["DeletePostPayload"]],
deletePostFormat?: [{	/** Input for the deletePostFormat mutation */
	input:ValueTypes["DeletePostFormatInput"]},ValueTypes["DeletePostFormatPayload"]],
deleteTag?: [{	/** Input for the deleteTag mutation */
	input:ValueTypes["DeleteTagInput"]},ValueTypes["DeleteTagPayload"]],
deleteUser?: [{	/** Input for the deleteUser mutation */
	input:ValueTypes["DeleteUserInput"]},ValueTypes["DeleteUserPayload"]],
generateAuthorizationCode?: [{	/** Input for the generateAuthorizationCode mutation */
	input:ValueTypes["GenerateAuthorizationCodeInput"]},ValueTypes["GenerateAuthorizationCodePayload"]],
increaseCount?: [{	/** The count to increase */
	count?:number | null},boolean],
registerUser?: [{	/** Input for the registerUser mutation */
	input:ValueTypes["RegisterUserInput"]},ValueTypes["RegisterUserPayload"]],
resetUserPassword?: [{	/** Input for the resetUserPassword mutation */
	input:ValueTypes["ResetUserPasswordInput"]},ValueTypes["ResetUserPasswordPayload"]],
restoreComment?: [{	/** Input for the restoreComment mutation */
	input:ValueTypes["RestoreCommentInput"]},ValueTypes["RestoreCommentPayload"]],
sendPasswordResetEmail?: [{	/** Input for the sendPasswordResetEmail mutation */
	input:ValueTypes["SendPasswordResetEmailInput"]},ValueTypes["SendPasswordResetEmailPayload"]],
updateBadge?: [{	/** Input for the updateBadge mutation */
	input:ValueTypes["UpdateBadgeInput"]},ValueTypes["UpdateBadgePayload"]],
updateCategory?: [{	/** Input for the UpdateCategory mutation */
	input:ValueTypes["UpdateCategoryInput"]},ValueTypes["UpdateCategoryPayload"]],
updateComment?: [{	/** Input for the updateComment mutation */
	input:ValueTypes["UpdateCommentInput"]},ValueTypes["UpdateCommentPayload"]],
updateHero?: [{	/** Input for the updateHero mutation */
	input:ValueTypes["UpdateHeroInput"]},ValueTypes["UpdateHeroPayload"]],
updateMediaItem?: [{	/** Input for the updateMediaItem mutation */
	input:ValueTypes["UpdateMediaItemInput"]},ValueTypes["UpdateMediaItemPayload"]],
updateMovie?: [{	/** Input for the updateMovie mutation */
	input:ValueTypes["UpdateMovieInput"]},ValueTypes["UpdateMoviePayload"]],
updatePage?: [{	/** Input for the updatePage mutation */
	input:ValueTypes["UpdatePageInput"]},ValueTypes["UpdatePagePayload"]],
updatePost?: [{	/** Input for the updatePost mutation */
	input:ValueTypes["UpdatePostInput"]},ValueTypes["UpdatePostPayload"]],
updatePostFormat?: [{	/** Input for the UpdatePostFormat mutation */
	input:ValueTypes["UpdatePostFormatInput"]},ValueTypes["UpdatePostFormatPayload"]],
updateSettings?: [{	/** Input for the updateSettings mutation */
	input:ValueTypes["UpdateSettingsInput"]},ValueTypes["UpdateSettingsPayload"]],
updateTag?: [{	/** Input for the UpdateTag mutation */
	input:ValueTypes["UpdateTagInput"]},ValueTypes["UpdateTagPayload"]],
updateUser?: [{	/** Input for the updateUser mutation */
	input:ValueTypes["UpdateUserInput"]},ValueTypes["UpdateUserPayload"]],
		__typename?: boolean
}>;
	/** Input for the createBadge mutation */
["CreateBadgeInput"]: {
	/** The userId to assign as the author of the object */
	authorId?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** The title of the object */
	title?:string | null
};
	/** The payload for the createBadge mutation */
["CreateBadgePayload"]: AliasType<{
	/** The Post object mutation type. */
	badge?:ValueTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
		__typename?: boolean
}>;
	/** Input for the createCategory mutation */
["CreateCategoryInput"]: {
	/** The slug that the category will be an alias of */
	aliasOf?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The description of the category object */
	description?:string | null,
	/** The name of the category object to mutate */
	name:string,
	/** The ID of the category that should be set as the parent */
	parentId?:string | null,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?:string | null
};
	/** The payload for the createCategory mutation */
["CreateCategoryPayload"]: AliasType<{
	/** The created category */
	category?:ValueTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
		__typename?: boolean
}>;
	/** Input for the createComment mutation */
["CreateCommentInput"]: {
	/** The approval status of the comment. */
	approved?:string | null,
	/** The name of the comment's author. */
	author?:string | null,
	/** The email of the comment's author. */
	authorEmail?:string | null,
	/** The url of the comment's author. */
	authorUrl?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The ID of the post object the comment belongs to. */
	commentOn?:number | null,
	/** Content of the comment. */
	content?:string | null,
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** Parent comment of current comment. */
	parent?:string | null,
	/** Type of comment. */
	type?:string | null
};
	/** The payload for the createComment mutation */
["CreateCommentPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The comment that was created */
	comment?:ValueTypes["Comment"],
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?:boolean,
		__typename?: boolean
}>;
	/** Input for the createHero mutation */
["CreateHeroInput"]: {
	/** The userId to assign as the author of the object */
	authorId?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** The title of the object */
	title?:string | null
};
	/** The payload for the createHero mutation */
["CreateHeroPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The Post object mutation type. */
	hero?:ValueTypes["Hero"],
		__typename?: boolean
}>;
	/** Input for the createMediaItem mutation */
["CreateMediaItemInput"]: {
	/** Alternative text to display when mediaItem is not displayed */
	altText?:string | null,
	/** The userId to assign as the author of the mediaItem */
	authorId?:string | null,
	/** The caption for the mediaItem */
	caption?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The comment status for the mediaItem */
	commentStatus?:string | null,
	/** The date of the mediaItem */
	date?:string | null,
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?:string | null,
	/** Description of the mediaItem */
	description?:string | null,
	/** The file name of the mediaItem */
	filePath?:string | null,
	/** The file type of the mediaItem */
	fileType?:ValueTypes["MimeTypeEnum"] | null,
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId?:string | null,
	/** The ping status for the mediaItem */
	pingStatus?:string | null,
	/** The slug of the mediaItem */
	slug?:string | null,
	/** The status of the mediaItem */
	status?:ValueTypes["MediaItemStatusEnum"] | null,
	/** The title of the mediaItem */
	title?:string | null
};
	/** The status of the media item object. */
["MediaItemStatusEnum"]:MediaItemStatusEnum;
	/** The payload for the createMediaItem mutation */
["CreateMediaItemPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The MediaItem object mutation type. */
	mediaItem?:ValueTypes["MediaItem"],
		__typename?: boolean
}>;
	/** Input for the createMovie mutation */
["CreateMovieInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The content of the object */
	content?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** The title of the object */
	title?:string | null
};
	/** The payload for the createMovie mutation */
["CreateMoviePayload"]: AliasType<{
	/** The Post object mutation type. */
	movie?:ValueTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
		__typename?: boolean
}>;
	/** Input for the createPage mutation */
["CreatePageInput"]: {
	/** The userId to assign as the author of the object */
	authorId?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The comment status for the object */
	commentStatus?:string | null,
	/** The content of the object */
	content?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The ID of the parent object */
	parentId?:string | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** The title of the object */
	title?:string | null
};
	/** The payload for the createPage mutation */
["CreatePagePayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The Post object mutation type. */
	page?:ValueTypes["Page"],
		__typename?: boolean
}>;
	/** Input for the createPost mutation */
["CreatePostInput"]: {
	/** The userId to assign as the author of the object */
	authorId?:string | null,
	/** Set connections between the post and categories */
	categories?:ValueTypes["PostCategoriesInput"] | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The comment status for the object */
	commentStatus?:string | null,
	/** The content of the object */
	content?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** The excerpt of the object */
	excerpt?:string | null,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The ping status for the object */
	pingStatus?:string | null,
	/** URLs that have been pinged. */
	pinged?:(string | undefined | null)[],
	/** Set connections between the post and postFormats */
	postFormats?:ValueTypes["PostPostFormatsInput"] | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Set connections between the post and tags */
	tags?:ValueTypes["PostTagsInput"] | null,
	/** The title of the object */
	title?:string | null,
	/** URLs queued to be pinged. */
	toPing?:(string | undefined | null)[]
};
	/** Set relationships between the post to categories */
["PostCategoriesInput"]: {
	/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?:boolean | null,
	/** The input list of items to set. */
	nodes?:(ValueTypes["PostCategoriesNodeInput"] | undefined | null)[]
};
	/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostCategoriesNodeInput"]: {
	/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?:string | null,
	/** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
	id?:string | null,
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?:string | null,
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?:string | null
};
	/** Set relationships between the post to postFormats */
["PostPostFormatsInput"]: {
	/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?:boolean | null,
	/** The input list of items to set. */
	nodes?:(ValueTypes["PostPostFormatsNodeInput"] | undefined | null)[]
};
	/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostPostFormatsNodeInput"]: {
	/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?:string | null,
	/** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
	id?:string | null,
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?:string | null,
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?:string | null
};
	/** Set relationships between the post to tags */
["PostTagsInput"]: {
	/** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
	append?:boolean | null,
	/** The input list of items to set. */
	nodes?:(ValueTypes["PostTagsNodeInput"] | undefined | null)[]
};
	/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostTagsNodeInput"]: {
	/** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
	description?:string | null,
	/** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
	id?:string | null,
	/** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?:string | null,
	/** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?:string | null
};
	/** The payload for the createPost mutation */
["CreatePostPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The Post object mutation type. */
	post?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** Input for the createPostFormat mutation */
["CreatePostFormatInput"]: {
	/** The slug that the post_format will be an alias of */
	aliasOf?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The description of the post_format object */
	description?:string | null,
	/** The name of the post_format object to mutate */
	name:string,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?:string | null
};
	/** The payload for the createPostFormat mutation */
["CreatePostFormatPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The created post_format */
	postFormat?:ValueTypes["PostFormat"],
		__typename?: boolean
}>;
	/** Input for the createTag mutation */
["CreateTagInput"]: {
	/** The slug that the post_tag will be an alias of */
	aliasOf?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The description of the post_tag object */
	description?:string | null,
	/** The name of the post_tag object to mutate */
	name:string,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?:string | null
};
	/** The payload for the createTag mutation */
["CreateTagPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The created post_tag */
	tag?:ValueTypes["Tag"],
		__typename?: boolean
}>;
	/** Input for the createUser mutation */
["CreateUserInput"]: {
	/** User's AOL IM account. */
	aim?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** A string containing content about the user. */
	description?:string | null,
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?:string | null,
	/** A string containing the user's email address. */
	email?:string | null,
	/** 	The user's first name. */
	firstName?:string | null,
	/** User's Jabber account. */
	jabber?:string | null,
	/** The user's last name. */
	lastName?:string | null,
	/** User's locale. */
	locale?:string | null,
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?:string | null,
	/** The user's nickname, defaults to the user's username. */
	nickname?:string | null,
	/** A string that contains the plain text password for the user. */
	password?:string | null,
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?:string | null,
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?:string | null,
	/** An array of roles to be assigned to the user. */
	roles?:(string | undefined | null)[],
	/** A string that contains the user's username for logging in. */
	username:string,
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?:string | null,
	/** User's Yahoo IM account. */
	yim?:string | null
};
	/** The payload for the createUser mutation */
["CreateUserPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The User object mutation type. */
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Input for the deleteBadge mutation */
["DeleteBadgeInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?:boolean | null,
	/** The ID of the badge to delete */
	id:string
};
	/** The payload for the deleteBadge mutation */
["DeleteBadgePayload"]: AliasType<{
	/** The object before it was deleted */
	badge?:ValueTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted object */
	deletedId?:boolean,
		__typename?: boolean
}>;
	/** Input for the deleteCategory mutation */
["DeleteCategoryInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The ID of the category to delete */
	id:string
};
	/** The payload for the deleteCategory mutation */
["DeleteCategoryPayload"]: AliasType<{
	/** The deteted term object */
	category?:ValueTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted object */
	deletedId?:boolean,
		__typename?: boolean
}>;
	/** Input for the deleteComment mutation */
["DeleteCommentInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Whether the comment should be force deleted instead of being moved to the trash */
	forceDelete?:boolean | null,
	/** The deleted comment ID */
	id:string
};
	/** The payload for the deleteComment mutation */
["DeleteCommentPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The deleted comment object */
	comment?:ValueTypes["Comment"],
	/** The deleted comment ID */
	deletedId?:boolean,
		__typename?: boolean
}>;
	/** Input for the deleteHero mutation */
["DeleteHeroInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?:boolean | null,
	/** The ID of the hero to delete */
	id:string
};
	/** The payload for the deleteHero mutation */
["DeleteHeroPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted object */
	deletedId?:boolean,
	/** The object before it was deleted */
	hero?:ValueTypes["Hero"],
		__typename?: boolean
}>;
	/** Input for the deleteMediaItem mutation */
["DeleteMediaItemInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Whether the mediaItem should be force deleted instead of being moved to the trash */
	forceDelete?:boolean | null,
	/** The ID of the mediaItem to delete */
	id:string
};
	/** The payload for the deleteMediaItem mutation */
["DeleteMediaItemPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted mediaItem */
	deletedId?:boolean,
	/** The mediaItem before it was deleted */
	mediaItem?:ValueTypes["MediaItem"],
		__typename?: boolean
}>;
	/** Input for the deleteMovie mutation */
["DeleteMovieInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?:boolean | null,
	/** The ID of the Movie to delete */
	id:string
};
	/** The payload for the deleteMovie mutation */
["DeleteMoviePayload"]: AliasType<{
	/** The object before it was deleted */
	movie?:ValueTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted object */
	deletedId?:boolean,
		__typename?: boolean
}>;
	/** Input for the deletePage mutation */
["DeletePageInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?:boolean | null,
	/** The ID of the page to delete */
	id:string
};
	/** The payload for the deletePage mutation */
["DeletePagePayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted object */
	deletedId?:boolean,
	/** The object before it was deleted */
	page?:ValueTypes["Page"],
		__typename?: boolean
}>;
	/** Input for the deletePost mutation */
["DeletePostInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?:boolean | null,
	/** The ID of the post to delete */
	id:string
};
	/** The payload for the deletePost mutation */
["DeletePostPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted object */
	deletedId?:boolean,
	/** The object before it was deleted */
	post?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** Input for the deletePostFormat mutation */
["DeletePostFormatInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The ID of the postFormat to delete */
	id:string
};
	/** The payload for the deletePostFormat mutation */
["DeletePostFormatPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted object */
	deletedId?:boolean,
	/** The deteted term object */
	postFormat?:ValueTypes["PostFormat"],
		__typename?: boolean
}>;
	/** Input for the deleteTag mutation */
["DeleteTagInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The ID of the tag to delete */
	id:string
};
	/** The payload for the deleteTag mutation */
["DeleteTagPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the deleted object */
	deletedId?:boolean,
	/** The deteted term object */
	tag?:ValueTypes["Tag"],
		__typename?: boolean
}>;
	/** Input for the deleteUser mutation */
["DeleteUserInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The ID of the user you want to delete */
	id:string,
	/** Reassign posts and links to new User ID. */
	reassignId?:string | null
};
	/** The payload for the deleteUser mutation */
["DeleteUserPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The ID of the user that you just deleted */
	deletedId?:boolean,
	/** The deleted user object */
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Input for the generateAuthorizationCode mutation */
["GenerateAuthorizationCodeInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Email for WordPress user */
	email?:string | null,
	/** Password for WordPress user */
	password?:string | null,
	/** Username for WordPress user */
	username?:string | null
};
	/** The payload for the generateAuthorizationCode mutation */
["GenerateAuthorizationCodePayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** Authorization code used for requesting refresh/access tokens */
	code?:boolean,
	/** Error encountered during user authentication, if any */
	error?:boolean,
		__typename?: boolean
}>;
	/** Input for the registerUser mutation */
["RegisterUserInput"]: {
	/** User's AOL IM account. */
	aim?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** A string containing content about the user. */
	description?:string | null,
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?:string | null,
	/** A string containing the user's email address. */
	email?:string | null,
	/** 	The user's first name. */
	firstName?:string | null,
	/** User's Jabber account. */
	jabber?:string | null,
	/** The user's last name. */
	lastName?:string | null,
	/** User's locale. */
	locale?:string | null,
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?:string | null,
	/** The user's nickname, defaults to the user's username. */
	nickname?:string | null,
	/** A string that contains the plain text password for the user. */
	password?:string | null,
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?:string | null,
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?:string | null,
	/** A string that contains the user's username. */
	username:string,
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?:string | null,
	/** User's Yahoo IM account. */
	yim?:string | null
};
	/** The payload for the registerUser mutation */
["RegisterUserPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The User object mutation type. */
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Input for the resetUserPassword mutation */
["ResetUserPasswordInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Password reset key */
	key?:string | null,
	/** The user's login (username). */
	login?:string | null,
	/** The new password. */
	password?:string | null
};
	/** The payload for the resetUserPassword mutation */
["ResetUserPasswordPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The User object mutation type. */
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Input for the restoreComment mutation */
["RestoreCommentInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The ID of the comment to be restored */
	id:string
};
	/** The payload for the restoreComment mutation */
["RestoreCommentPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The restored comment object */
	comment?:ValueTypes["Comment"],
	/** The ID of the restored comment */
	restoredId?:boolean,
		__typename?: boolean
}>;
	/** Input for the sendPasswordResetEmail mutation */
["SendPasswordResetEmailInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** A string that contains the user's username or email address. */
	username:string
};
	/** The payload for the sendPasswordResetEmail mutation */
["SendPasswordResetEmailPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The user that the password reset email was sent to */
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** Input for the updateBadge mutation */
["UpdateBadgeInput"]: {
	/** The userId to assign as the author of the object */
	authorId?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** The ID of the badge object */
	id:string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** The title of the object */
	title?:string | null
};
	/** The payload for the updateBadge mutation */
["UpdateBadgePayload"]: AliasType<{
	/** The Post object mutation type. */
	badge?:ValueTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
		__typename?: boolean
}>;
	/** Input for the UpdateCategory mutation */
["UpdateCategoryInput"]: {
	/** The slug that the category will be an alias of */
	aliasOf?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The description of the category object */
	description?:string | null,
	/** The ID of the category object to update */
	id:string,
	/** The name of the category object to mutate */
	name?:string | null,
	/** The ID of the category that should be set as the parent */
	parentId?:string | null,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?:string | null
};
	/** The payload for the UpdateCategory mutation */
["UpdateCategoryPayload"]: AliasType<{
	/** The created category */
	category?:ValueTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
		__typename?: boolean
}>;
	/** Input for the updateComment mutation */
["UpdateCommentInput"]: {
	/** The approval status of the comment. */
	approved?:string | null,
	/** The name of the comment's author. */
	author?:string | null,
	/** The email of the comment's author. */
	authorEmail?:string | null,
	/** The url of the comment's author. */
	authorUrl?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The ID of the post object the comment belongs to. */
	commentOn?:number | null,
	/** Content of the comment. */
	content?:string | null,
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** The ID of the comment being updated. */
	id:string,
	/** Parent comment of current comment. */
	parent?:string | null,
	/** Type of comment. */
	type?:string | null
};
	/** The payload for the updateComment mutation */
["UpdateCommentPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The comment that was created */
	comment?:ValueTypes["Comment"],
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?:boolean,
		__typename?: boolean
}>;
	/** Input for the updateHero mutation */
["UpdateHeroInput"]: {
	/** The userId to assign as the author of the object */
	authorId?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** The ID of the hero object */
	id:string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** The title of the object */
	title?:string | null
};
	/** The payload for the updateHero mutation */
["UpdateHeroPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The Post object mutation type. */
	hero?:ValueTypes["Hero"],
		__typename?: boolean
}>;
	/** Input for the updateMediaItem mutation */
["UpdateMediaItemInput"]: {
	/** Alternative text to display when mediaItem is not displayed */
	altText?:string | null,
	/** The userId to assign as the author of the mediaItem */
	authorId?:string | null,
	/** The caption for the mediaItem */
	caption?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The comment status for the mediaItem */
	commentStatus?:string | null,
	/** The date of the mediaItem */
	date?:string | null,
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?:string | null,
	/** Description of the mediaItem */
	description?:string | null,
	/** The file name of the mediaItem */
	filePath?:string | null,
	/** The file type of the mediaItem */
	fileType?:ValueTypes["MimeTypeEnum"] | null,
	/** The ID of the mediaItem object */
	id:string,
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId?:string | null,
	/** The ping status for the mediaItem */
	pingStatus?:string | null,
	/** The slug of the mediaItem */
	slug?:string | null,
	/** The status of the mediaItem */
	status?:ValueTypes["MediaItemStatusEnum"] | null,
	/** The title of the mediaItem */
	title?:string | null
};
	/** The payload for the updateMediaItem mutation */
["UpdateMediaItemPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The MediaItem object mutation type. */
	mediaItem?:ValueTypes["MediaItem"],
		__typename?: boolean
}>;
	/** Input for the updateMovie mutation */
["UpdateMovieInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The content of the object */
	content?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** The ID of the Movie object */
	id:string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** The title of the object */
	title?:string | null
};
	/** The payload for the updateMovie mutation */
["UpdateMoviePayload"]: AliasType<{
	/** The Post object mutation type. */
	movie?:ValueTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
		__typename?: boolean
}>;
	/** Input for the updatePage mutation */
["UpdatePageInput"]: {
	/** The userId to assign as the author of the object */
	authorId?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The comment status for the object */
	commentStatus?:string | null,
	/** The content of the object */
	content?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** The ID of the page object */
	id:string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The ID of the parent object */
	parentId?:string | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** The title of the object */
	title?:string | null
};
	/** The payload for the updatePage mutation */
["UpdatePagePayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The Post object mutation type. */
	page?:ValueTypes["Page"],
		__typename?: boolean
}>;
	/** Input for the updatePost mutation */
["UpdatePostInput"]: {
	/** The userId to assign as the author of the object */
	authorId?:string | null,
	/** Set connections between the post and categories */
	categories?:ValueTypes["PostCategoriesInput"] | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The comment status for the object */
	commentStatus?:string | null,
	/** The content of the object */
	content?:string | null,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?:string | null,
	/** The excerpt of the object */
	excerpt?:string | null,
	/** The ID of the post object */
	id:string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number | null,
	/** The password used to protect the content of the object */
	password?:string | null,
	/** The ping status for the object */
	pingStatus?:string | null,
	/** URLs that have been pinged. */
	pinged?:(string | undefined | null)[],
	/** Set connections between the post and postFormats */
	postFormats?:ValueTypes["PostPostFormatsInput"] | null,
	/** The slug of the object */
	slug?:string | null,
	/** The status of the object */
	status?:ValueTypes["PostStatusEnum"] | null,
	/** Set connections between the post and tags */
	tags?:ValueTypes["PostTagsInput"] | null,
	/** The title of the object */
	title?:string | null,
	/** URLs queued to be pinged. */
	toPing?:(string | undefined | null)[]
};
	/** The payload for the updatePost mutation */
["UpdatePostPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The Post object mutation type. */
	post?:ValueTypes["Post"],
		__typename?: boolean
}>;
	/** Input for the UpdatePostFormat mutation */
["UpdatePostFormatInput"]: {
	/** The slug that the post_format will be an alias of */
	aliasOf?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The description of the post_format object */
	description?:string | null,
	/** The ID of the postFormat object to update */
	id:string,
	/** The name of the post_format object to mutate */
	name?:string | null,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?:string | null
};
	/** The payload for the UpdatePostFormat mutation */
["UpdatePostFormatPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The created post_format */
	postFormat?:ValueTypes["PostFormat"],
		__typename?: boolean
}>;
	/** Input for the updateSettings mutation */
["UpdateSettingsInput"]: {
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** Allow people to submit comments on new posts. */
	discussionSettingsDefaultCommentStatus?:string | null,
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	discussionSettingsDefaultPingStatus?:string | null,
	/** A date format for all date strings. */
	generalSettingsDateFormat?:string | null,
	/** Site tagline. */
	generalSettingsDescription?:string | null,
	/** This address is used for admin purposes, like new user notification. */
	generalSettingsEmail?:string | null,
	/** WordPress locale code. */
	generalSettingsLanguage?:string | null,
	/** A day number of the week that the week should start on. */
	generalSettingsStartOfWeek?:number | null,
	/** A time format for all time strings. */
	generalSettingsTimeFormat?:string | null,
	/** A city in the same timezone as you. */
	generalSettingsTimezone?:string | null,
	/** Site title. */
	generalSettingsTitle?:string | null,
	/** Site URL. */
	generalSettingsUrl?:string | null,
	/** Blog pages show at most. */
	readingSettingsPostsPerPage?:number | null,
	/** Default post category. */
	writingSettingsDefaultCategory?:number | null,
	/** Default post format. */
	writingSettingsDefaultPostFormat?:string | null,
	/** Convert emoticons like :-) and :-P to graphics on display. */
	writingSettingsUseSmilies?:boolean | null
};
	/** The payload for the updateSettings mutation */
["UpdateSettingsPayload"]: AliasType<{
	/** Update all settings. */
	allSettings?:ValueTypes["Settings"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** Update the discussion setting. */
	discussionSettings?:ValueTypes["DiscussionSettings"],
	/** Update the general setting. */
	generalSettings?:ValueTypes["GeneralSettings"],
	/** Update the reading setting. */
	readingSettings?:ValueTypes["ReadingSettings"],
	/** Update the writing setting. */
	writingSettings?:ValueTypes["WritingSettings"],
		__typename?: boolean
}>;
	/** Input for the UpdateTag mutation */
["UpdateTagInput"]: {
	/** The slug that the post_tag will be an alias of */
	aliasOf?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** The description of the post_tag object */
	description?:string | null,
	/** The ID of the tag object to update */
	id:string,
	/** The name of the post_tag object to mutate */
	name?:string | null,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?:string | null
};
	/** The payload for the UpdateTag mutation */
["UpdateTagPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The created post_tag */
	tag?:ValueTypes["Tag"],
		__typename?: boolean
}>;
	/** Input for the updateUser mutation */
["UpdateUserInput"]: {
	/** User's AOL IM account. */
	aim?:string | null,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string | null,
	/** A string containing content about the user. */
	description?:string | null,
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?:string | null,
	/** A string containing the user's email address. */
	email?:string | null,
	/** 	The user's first name. */
	firstName?:string | null,
	/** The ID of the user */
	id:string,
	/** User's Jabber account. */
	jabber?:string | null,
	/** The user's last name. */
	lastName?:string | null,
	/** User's locale. */
	locale?:string | null,
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?:string | null,
	/** The user's nickname, defaults to the user's username. */
	nickname?:string | null,
	/** A string that contains the plain text password for the user. */
	password?:string | null,
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?:string | null,
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?:string | null,
	/** An array of roles to be assigned to the user. */
	roles?:(string | undefined | null)[],
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?:string | null,
	/** User's Yahoo IM account. */
	yim?:string | null
};
	/** The payload for the updateUser mutation */
["UpdateUserPayload"]: AliasType<{
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:boolean,
	/** The User object mutation type. */
	user?:ValueTypes["User"],
		__typename?: boolean
}>;
	/** A Comment Author object */
["CommentAuthor"]: AliasType<{
	/** Identifies the primary key from the database. */
	databaseId?:boolean,
	/** The email for the comment author */
	email?:boolean,
	/** The globally unique identifier for the comment author object */
	id?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** The name for the comment author. */
	name?:boolean,
	/** The url the comment author. */
	url?:boolean,
		__typename?: boolean
}>;
	/** The template assigned to the node */
["DefaultTemplate"]: AliasType<{
	/** The name of the template */
	templateName?:boolean,
		__typename?: boolean
}>;
	/** The template assigned to the node */
["CoverTemplate"]: AliasType<{
	/** The name of the template */
	templateName?:boolean,
		__typename?: boolean
}>;
	/** The template assigned to the node */
["FullWidthTemplate"]: AliasType<{
	/** The name of the template */
	templateName?:boolean,
		__typename?: boolean
}>
  }

export type ModelTypes = {
    /** The root entry point into the Graph */
["RootQuery"]: {
		/** Entry point to get all settings for the site */
	allSettings?:ModelTypes["Settings"],
	/** An object of the badge Type.  */
	badge?:ModelTypes["Badge"],
	/** A badge object */
	badgeBy?:ModelTypes["Badge"],
	/** Connection between the RootQuery type and the badge type */
	badges?:ModelTypes["RootQueryToBadgeConnection"],
	/** Connection between the RootQuery type and the category type */
	categories?:ModelTypes["RootQueryToCategoryConnection"],
	/** A 0bject */
	category?:ModelTypes["Category"],
	/** Returns a Comment */
	comment?:ModelTypes["Comment"],
	/** Connection between the RootQuery type and the Comment type */
	comments?:ModelTypes["RootQueryToCommentConnection"],
	/** A node used to manage content */
	contentNode?:ModelTypes["ContentNode"],
	/** Connection between the RootQuery type and the ContentNode type */
	contentNodes?:ModelTypes["RootQueryToContentNodeConnection"],
	/** Fetch a Content Type node by unique Identifier */
	contentType?:ModelTypes["ContentType"],
	/** Connection between the RootQuery type and the ContentType type */
	contentTypes?:ModelTypes["RootQueryToContentTypeConnection"],
	/** Fields of the &#039;DiscussionSettings&#039; settings group */
	discussionSettings?:ModelTypes["DiscussionSettings"],
	/** Fields of the &#039;GeneralSettings&#039; settings group */
	generalSettings?:ModelTypes["GeneralSettings"],
	/** An object of the hero Type.  */
	hero?:ModelTypes["Hero"],
	/** A hero object */
	heroBy?:ModelTypes["Hero"],
	/** Connection between the RootQuery type and the hero type */
	heroes?:ModelTypes["RootQueryToHeroConnection"],
	/** An object of the mediaItem Type.  */
	mediaItem?:ModelTypes["MediaItem"],
	/** A mediaItem object */
	mediaItemBy?:ModelTypes["MediaItem"],
	/** Connection between the RootQuery type and the mediaItem type */
	mediaItems?:ModelTypes["RootQueryToMediaItemConnection"],
	/** A WordPress navigation menu */
	menu?:ModelTypes["Menu"],
	/** A WordPress navigation menu item */
	menuItem?:ModelTypes["MenuItem"],
	/** Connection between the RootQuery type and the MenuItem type */
	menuItems?:ModelTypes["RootQueryToMenuItemConnection"],
	/** Connection between the RootQuery type and the Menu type */
	menus?:ModelTypes["RootQueryToMenuConnection"],
	/** An object of the Movie Type.  */
	movie?:ModelTypes["Movie"],
	/** A Movie object */
	movieBy?:ModelTypes["Movie"],
	/** Connection between the RootQuery type and the Movie type */
	movies?:ModelTypes["RootQueryToMovieConnection"],
	/** Fetches an object given its ID */
	node?:ModelTypes["Node"],
	/** Fetches an object given its Unique Resource Identifier */
	nodeByUri?:ModelTypes["UniformResourceIdentifiable"],
	/** An object of the page Type.  */
	page?:ModelTypes["Page"],
	/** A page object */
	pageBy?:ModelTypes["Page"],
	/** Connection between the RootQuery type and the page type */
	pages?:ModelTypes["RootQueryToPageConnection"],
	/** A WordPress plugin */
	plugin?:ModelTypes["Plugin"],
	/** Connection between the RootQuery type and the Plugin type */
	plugins?:ModelTypes["RootQueryToPluginConnection"],
	/** An object of the post Type.  */
	post?:ModelTypes["Post"],
	/** A post object */
	postBy?:ModelTypes["Post"],
	/** A 0bject */
	postFormat?:ModelTypes["PostFormat"],
	/** Connection between the RootQuery type and the postFormat type */
	postFormats?:ModelTypes["RootQueryToPostFormatConnection"],
	/** Connection between the RootQuery type and the post type */
	posts?:ModelTypes["RootQueryToPostConnection"],
	/** Fields of the &#039;ReadingSettings&#039; settings group */
	readingSettings?:ModelTypes["ReadingSettings"],
	/** Connection between the RootQuery type and the EnqueuedScript type */
	registeredScripts?:ModelTypes["RootQueryToEnqueuedScriptConnection"],
	/** Connection between the RootQuery type and the EnqueuedStylesheet type */
	registeredStylesheets?:ModelTypes["RootQueryToEnqueuedStylesheetConnection"],
	/** Connection between the RootQuery type and the ContentRevisionUnion type */
	revisions?:ModelTypes["RootQueryToContentRevisionUnionConnection"],
	/** A 0bject */
	tag?:ModelTypes["Tag"],
	/** Connection between the RootQuery type and the tag type */
	tags?:ModelTypes["RootQueryToTagConnection"],
	/** Connection between the RootQuery type and the Taxonomy type */
	taxonomies?:ModelTypes["RootQueryToTaxonomyConnection"],
	/** Fetch a Taxonomy node by unique Identifier */
	taxonomy?:ModelTypes["Taxonomy"],
	/** A node in a taxonomy used to group and relate content nodes */
	termNode?:ModelTypes["TermNode"],
	/** Connection between the RootQuery type and the TermNode type */
	terms?:ModelTypes["RootQueryToTermNodeConnection"],
	/** A Theme object */
	theme?:ModelTypes["Theme"],
	/** Connection between the RootQuery type and the Theme type */
	themes?:ModelTypes["RootQueryToThemeConnection"],
	/** Returns a user */
	user?:ModelTypes["User"],
	/** Returns a user role */
	userRole?:ModelTypes["UserRole"],
	/** Connection between the RootQuery type and the UserRole type */
	userRoles?:ModelTypes["RootQueryToUserRoleConnection"],
	/** Connection between the RootQuery type and the User type */
	users?:ModelTypes["RootQueryToUserConnection"],
	/** Returns the current user */
	viewer?:ModelTypes["User"],
	/** Fields of the &#039;WritingSettings&#039; settings group */
	writingSettings?:ModelTypes["WritingSettings"]
};
	/** All of the registered settings */
["Settings"]: {
		/** Settings of the the string Settings Group */
	discussionSettingsDefaultCommentStatus?:string,
	/** Settings of the the string Settings Group */
	discussionSettingsDefaultPingStatus?:string,
	/** Settings of the the string Settings Group */
	generalSettingsDateFormat?:string,
	/** Settings of the the string Settings Group */
	generalSettingsDescription?:string,
	/** Settings of the the string Settings Group */
	generalSettingsEmail?:string,
	/** Settings of the the string Settings Group */
	generalSettingsLanguage?:string,
	/** Settings of the the integer Settings Group */
	generalSettingsStartOfWeek?:number,
	/** Settings of the the string Settings Group */
	generalSettingsTimeFormat?:string,
	/** Settings of the the string Settings Group */
	generalSettingsTimezone?:string,
	/** Settings of the the string Settings Group */
	generalSettingsTitle?:string,
	/** Settings of the the string Settings Group */
	generalSettingsUrl?:string,
	/** Settings of the the integer Settings Group */
	readingSettingsPostsPerPage?:number,
	/** Settings of the the integer Settings Group */
	writingSettingsDefaultCategory?:number,
	/** Settings of the the string Settings Group */
	writingSettingsDefaultPostFormat?:string,
	/** Settings of the the boolean Settings Group */
	writingSettingsUseSmilies?:boolean
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["BadgeIdType"]: GraphQLTypes["BadgeIdType"];
	/** The badge type */
["Badge"]: {
		/** Connection between the NodeWithAuthor type and the User type */
	author?:ModelTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:number,
	/** The globally unique identifier of the author of the node */
	authorId?:string,
	/** The id field matches the WP_Post-&gt;ID field. */
	badgeId:number,
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ModelTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId:number,
	/** Post publishing date. */
	date?:string,
	/** The publishing date set in GMT. */
	dateGmt?:string,
	description?:string,
	/** The desired slug of the post */
	desiredSlug?:string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ModelTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:string,
	/** Connection between the badge type and the hero type */
	heroes?:ModelTypes["BadgeToHeroConnection"],
	/** The globally unique identifier of the badge object. */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ModelTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:string,
	name?:string,
	/** Connection between the badge type and the badge type */
	preview?:ModelTypes["BadgeToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:string,
	/** The current status of the object */
	status?:string,
	/** The template assigned to the node */
	template?:ModelTypes["ContentTemplate"],
	templates?:(string | undefined)[],
	tier?:(string | undefined)[],
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?:string,
	/** The unique resource identifier path */
	uri?:string
};
	/** An object with an ID */
["Node"]: ModelTypes["Badge"] | ModelTypes["ContentNode"] | ModelTypes["ContentType"] | ModelTypes["Taxonomy"] | ModelTypes["User"] | ModelTypes["Comment"] | ModelTypes["EnqueuedScript"] | ModelTypes["EnqueuedStylesheet"] | ModelTypes["Hero"] | ModelTypes["MediaItem"] | ModelTypes["Page"] | ModelTypes["NodeWithFeaturedImage"] | ModelTypes["Post"] | ModelTypes["Category"] | ModelTypes["TermNode"] | ModelTypes["PostFormat"] | ModelTypes["Tag"] | ModelTypes["UserRole"] | ModelTypes["Menu"] | ModelTypes["MenuItem"] | ModelTypes["Movie"] | ModelTypes["Plugin"] | ModelTypes["Theme"] | ModelTypes["CommentAuthor"];
	/** Nodes used to manage content */
["ContentNode"]: ModelTypes["Badge"] | ModelTypes["Hero"] | ModelTypes["MediaItem"] | ModelTypes["Page"] | ModelTypes["NodeWithFeaturedImage"] | ModelTypes["Post"] | ModelTypes["Movie"];
	/** Any node that has a URI */
["UniformResourceIdentifiable"]: ModelTypes["Badge"] | ModelTypes["ContentNode"] | ModelTypes["ContentType"] | ModelTypes["User"] | ModelTypes["Hero"] | ModelTypes["MediaItem"] | ModelTypes["Page"] | ModelTypes["NodeWithFeaturedImage"] | ModelTypes["Post"] | ModelTypes["Category"] | ModelTypes["TermNode"] | ModelTypes["PostFormat"] | ModelTypes["Tag"] | ModelTypes["Movie"];
	/** GraphQL representation of WordPress Conditional Tags. */
["ConditionalTags"]: {
		/** Determines whether the query is for an existing archive page. */
	isArchive?:boolean,
	/** Determines whether the query is for an existing attachment page. */
	isAttachment?:boolean,
	/** Determines whether the query is for an existing author archive page. */
	isAuthor?:boolean,
	/** Determines whether the query is for an existing category archive page. */
	isCategory?:boolean,
	/** Determines whether the query is for an existing date archive. */
	isDate?:boolean,
	/** Determines whether the query is for an existing day archive. */
	isDay?:boolean,
	/** Determines whether the query is for the front page of the site. */
	isFrontPage?:boolean,
	/** Determines whether the query is for the blog homepage. */
	isHome?:boolean,
	/** Determines whether the query is for an existing month archive. */
	isMonth?:boolean,
	/** Determines whether this site has more than one author. */
	isMultiAuthor?:boolean,
	/** Determines whether the query is for an existing single page. */
	isPage?:boolean,
	/** Determines whether currently in a page template. */
	isPageTemplate?:boolean,
	/** Determines whether the query is for an existing post type archive page. */
	isPostTypeArchive?:boolean,
	/** Determines whether the query is for a post or page preview. */
	isPreview?:boolean,
	/** Determines whether the query is for the Privacy Policy page. */
	isPrivacyPolicy?:boolean,
	/** Determines whether the query is for a search. */
	isSearch?:boolean,
	/** Determines whether the query is for an existing single post. */
	isSingle?:boolean,
	/** Determines whether the query is for an existing single post of any post type (post, attachment, page, custom post types). */
	isSingular?:boolean,
	/** Determines whether a post is sticky. */
	isSticky?:boolean,
	/** Determines whether the query is for an existing tag archive page. */
	isTag?:boolean,
	/** Determines whether the query is for an existing custom taxonomy archive page. */
	isTax?:boolean,
	/** Determines whether the query is for an existing year archive. */
	isYear?:boolean
};
	/** Connection between the ContentNode type and the ContentType type */
["ContentNodeToContentTypeConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["ContentType"]
};
	/** An Post Type object */
["ContentType"]: {
		/** Whether this content type should can be exported. */
	canExport?:boolean,
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** Connection between the ContentType type and the Taxonomy type */
	connectedTaxonomies?:ModelTypes["ContentTypeToTaxonomyConnection"],
	/** Connection between the ContentType type and the ContentNode type */
	contentNodes?:ModelTypes["ContentTypeToContentNodeConnection"],
	/** Whether content of this type should be deleted when the author of it is deleted from the system. */
	deleteWithUser?:boolean,
	/** Description of the content type. */
	description?:string,
	/** Whether to exclude nodes of this content type from front end search results. */
	excludeFromSearch?:boolean,
	/** The plural name of the content type within the GraphQL Schema. */
	graphqlPluralName?:string,
	/** The singular name of the content type within the GraphQL Schema. */
	graphqlSingleName?:string,
	/** Whether this content type should have archives. Content archives are generated by type and by date. */
	hasArchive?:boolean,
	/** Whether the content type is hierarchical, for example pages. */
	hierarchical?:boolean,
	/** The globally unique identifier of the post-type object. */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether this page is set to the static front page. */
	isFrontPage:boolean,
	/** Whether this page is set to the blog posts page. */
	isPostsPage:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** Display name of the content type. */
	label?:string,
	/** Details about the content type labels. */
	labels?:ModelTypes["PostTypeLabelDetails"],
	/** The name of the icon file to display as a menu icon. */
	menuIcon?:string,
	/** The position of this post type in the menu. Only applies if show_in_menu is true. */
	menuPosition?:number,
	/** The internal name of the post type. This should not be used for display purposes. */
	name?:string,
	/** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
	public?:boolean,
	/** Whether queries can be performed on the front end for the content type as part of parse_request(). */
	publiclyQueryable?:boolean,
	/** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
	restBase?:string,
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass?:string,
	/** Makes this content type available via the admin bar. */
	showInAdminBar?:boolean,
	/** Whether to add the content type to the GraphQL Schema. */
	showInGraphql?:boolean,
	/** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
	showInMenu?:boolean,
	/** Makes this content type available for selection in navigation menus. */
	showInNavMenus?:boolean,
	/** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
	showInRest?:boolean,
	/** Whether to generate and allow a UI for managing this content type in the admin. */
	showUi?:boolean,
	templates?:(string | undefined)[],
	/** The unique resource identifier path */
	uri?:string
};
	/** Connection between the ContentType type and the Taxonomy type */
["ContentTypeToTaxonomyConnection"]: {
		/** Edges for the ContentTypeToTaxonomyConnection connection */
	edges?:(ModelTypes["ContentTypeToTaxonomyConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Taxonomy"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["ContentTypeToTaxonomyConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Taxonomy"]
};
	/** A taxonomy object */
["Taxonomy"]: {
		/** List of Content Types associated with the Taxonomy */
	connectedContentTypes?:ModelTypes["TaxonomyToContentTypeConnection"],
	/** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
	description?:string,
	/** The plural name of the post type within the GraphQL Schema. */
	graphqlPluralName?:string,
	/** The singular name of the post type within the GraphQL Schema. */
	graphqlSingleName?:string,
	/** Whether the taxonomy is hierarchical */
	hierarchical?:boolean,
	/** The globally unique identifier of the taxonomy object. */
	id:string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Name of the taxonomy shown in the menu. Usually plural. */
	label?:string,
	/** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
	name?:string,
	/** Whether the taxonomy is publicly queryable */
	public?:boolean,
	/** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
	restBase?:string,
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass?:string,
	/** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
	showCloud?:boolean,
	/** Whether to display a column for the taxonomy on its post type listing screens. */
	showInAdminColumn?:boolean,
	/** Whether to add the post type to the GraphQL Schema. */
	showInGraphql?:boolean,
	/** Whether to show the taxonomy in the admin menu */
	showInMenu?:boolean,
	/** Whether the taxonomy is available for selection in navigation menus. */
	showInNavMenus?:boolean,
	/** Whether to show the taxonomy in the quick/bulk edit panel. */
	showInQuickEdit?:boolean,
	/** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
	showInRest?:boolean,
	/** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
	showUi?:boolean
};
	/** Connection between the Taxonomy type and the ContentType type */
["TaxonomyToContentTypeConnection"]: {
		/** Edges for the TaxonomyToContentTypeConnection connection */
	edges?:(ModelTypes["TaxonomyToContentTypeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentType"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TaxonomyToContentTypeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentType"]
};
	/** Information about pagination in a connection. */
["WPPageInfo"]: {
		/** When paginating forwards, the cursor to continue. */
	endCursor?:string,
	/** When paginating forwards, are there more items? */
	hasNextPage:boolean,
	/** When paginating backwards, are there more items? */
	hasPreviousPage:boolean,
	/** When paginating backwards, the cursor to continue. */
	startCursor?:string
};
	/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
["ContentTypeToContentNodeConnectionWhereArgs"]: GraphQLTypes["ContentTypeToContentNodeConnectionWhereArgs"];
	/** Allowed Content Types */
["ContentTypeEnum"]: GraphQLTypes["ContentTypeEnum"];
	/** Filter the connection based on input */
["DateQueryInput"]: GraphQLTypes["DateQueryInput"];
	/** Date values */
["DateInput"]: GraphQLTypes["DateInput"];
	/** The column to use when filtering by date */
["PostObjectsConnectionDateColumnEnum"]: GraphQLTypes["PostObjectsConnectionDateColumnEnum"];
	/** The logical relation between each item in the array when there are more than one. */
["RelationEnum"]: GraphQLTypes["RelationEnum"];
	/** The MimeType of the object */
["MimeTypeEnum"]: GraphQLTypes["MimeTypeEnum"];
	/** Options for ordering the connection */
["PostObjectsConnectionOrderbyInput"]: GraphQLTypes["PostObjectsConnectionOrderbyInput"];
	/** Field to order the connection by */
["PostObjectsConnectionOrderbyEnum"]: GraphQLTypes["PostObjectsConnectionOrderbyEnum"];
	/** The cardinality of the connection order */
["OrderEnum"]: GraphQLTypes["OrderEnum"];
	/** The status of the object. */
["PostStatusEnum"]: GraphQLTypes["PostStatusEnum"];
	/** Connection between the ContentType type and the ContentNode type */
["ContentTypeToContentNodeConnection"]: {
		/** Edges for the ContentTypeToContentNodeConnection connection */
	edges?:(ModelTypes["ContentTypeToContentNodeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["ContentTypeToContentNodeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentNode"]
};
	/** Details for labels of the PostType */
["PostTypeLabelDetails"]: {
		/** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
	addNew?:string,
	/** Label for adding a new singular item. */
	addNewItem?:string,
	/** Label to signify all items in a submenu link. */
	allItems?:string,
	/** Label for archives in nav menus */
	archives?:string,
	/** Label for the attributes meta box. */
	attributes?:string,
	/** Label for editing a singular item. */
	editItem?:string,
	/** Label for the Featured Image meta box title. */
	featuredImage?:string,
	/** Label for the table views hidden heading. */
	filterItemsList?:string,
	/** Label for the media frame button. */
	insertIntoItem?:string,
	/** Label for the table hidden heading. */
	itemsList?:string,
	/** Label for the table pagination hidden heading. */
	itemsListNavigation?:string,
	/** Label for the menu name. */
	menuName?:string,
	/** General name for the post type, usually plural. */
	name?:string,
	/** Label for the new item page title. */
	newItem?:string,
	/** Label used when no items are found. */
	notFound?:string,
	/** Label used when no items are in the trash. */
	notFoundInTrash?:string,
	/** Label used to prefix parents of hierarchical items. */
	parentItemColon?:string,
	/** Label for removing the featured image. */
	removeFeaturedImage?:string,
	/** Label for searching plural items. */
	searchItems?:string,
	/** Label for setting the featured image. */
	setFeaturedImage?:string,
	/** Name for one object of this post type. */
	singularName?:string,
	/** Label for the media frame filter. */
	uploadedToThisItem?:string,
	/** Label in the media frame for using a featured image. */
	useFeaturedImage?:string,
	/** Label for viewing a singular item. */
	viewItem?:string,
	/** Label for viewing post type archives. */
	viewItems?:string
};
	/** Connection between the ContentNode type and the User type */
["ContentNodeToEditLockConnectionEdge"]: {
		/** The timestamp for when the node was last edited */
	lockTimestamp?:string,
	/** The node of the connection, without the edges */
	node?:ModelTypes["User"]
};
	/** A User object */
["User"]: {
		/** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
	avatar?:ModelTypes["Avatar"],
	/** Connection between the User type and the badge type */
	badges?:ModelTypes["UserToBadgeConnection"],
	/** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
	capKey?:string,
	/** A list of capabilities (permissions) granted to the user */
	capabilities?:(string | undefined)[],
	/** Connection between the User type and the Comment type */
	comments?:ModelTypes["UserToCommentConnection"],
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** Identifies the primary key from the database. */
	databaseId:number,
	/** Description of the user. */
	description?:string,
	/** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
	email?:string,
	/** Connection between the User type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["UserToEnqueuedScriptConnection"],
	/** Connection between the User type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["UserToEnqueuedStylesheetConnection"],
	/** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
	extraCapabilities?:(string | undefined)[],
	/** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
	firstName?:string,
	/** Connection between the User type and the hero type */
	heroes?:ModelTypes["UserToHeroConnection"],
	/** The globally unique identifier for the user object. */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
	lastName?:string,
	/** The preferred language locale set for the user. Value derived from get_user_locale(). */
	locale?:string,
	/** Connection between the User type and the mediaItem type */
	mediaItems?:ModelTypes["UserToMediaItemConnection"],
	/** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
	name?:string,
	/** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
	nicename?:string,
	/** Nickname of the user. */
	nickname?:string,
	/** Connection between the User type and the page type */
	pages?:ModelTypes["UserToPageConnection"],
	/** Connection between the User type and the post type */
	posts?:ModelTypes["UserToPostConnection"],
	/** The date the user registered or was created. The field follows a full ISO8601 date string format. */
	registeredDate?:string,
	/** Connection between the User and Revisions authored by the user */
	revisions?:ModelTypes["UserToContentRevisionUnionConnection"],
	/** Connection between the User type and the UserRole type */
	roles?:ModelTypes["UserToUserRoleConnection"],
	/** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
	slug?:string,
	templates?:(string | undefined)[],
	/** The unique resource identifier path */
	uri?:string,
	/** A website url that is associated with the user. */
	url?:string,
	/** The Id of the user. Equivalent to WP_User-&gt;ID */
	userId?:number,
	/** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
	username?:string
};
	/** The author of a comment */
["Commenter"]: ModelTypes["User"] | ModelTypes["CommentAuthor"];
	/** Object that can be identified with a Database ID */
["DatabaseIdentifier"]: ModelTypes["Badge"] | ModelTypes["User"] | ModelTypes["Comment"] | ModelTypes["Hero"] | ModelTypes["MediaItem"] | ModelTypes["Page"] | ModelTypes["NodeWithFeaturedImage"] | ModelTypes["Post"] | ModelTypes["Category"] | ModelTypes["PostFormat"] | ModelTypes["Tag"] | ModelTypes["Menu"] | ModelTypes["MenuItem"] | ModelTypes["Movie"];
	/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
["AvatarRatingEnum"]: GraphQLTypes["AvatarRatingEnum"];
	/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
["Avatar"]: {
		/** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
	default?:string,
	/** HTML attributes to insert in the IMG element. Is not sanitized. */
	extraAttr?:string,
	/** Whether to always show the default image, never the Gravatar. */
	forceDefault?:boolean,
	/** Whether the avatar was successfully found. */
	foundAvatar?:boolean,
	/** Height of the avatar image. */
	height?:number,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
	rating?:string,
	/** Type of url scheme to use. Typically HTTP vs. HTTPS. */
	scheme?:string,
	/** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
	size?:number,
	/** URL for the gravatar image source. */
	url?:string,
	/** Width of the avatar image. */
	width?:number
};
	/** Arguments for filtering the UserToBadgeConnection connection */
["UserToBadgeConnectionWhereArgs"]: GraphQLTypes["UserToBadgeConnectionWhereArgs"];
	/** Connection between the User type and the badge type */
["UserToBadgeConnection"]: {
		/** Edges for the UserToBadgeConnection connection */
	edges?:(ModelTypes["UserToBadgeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Badge"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToBadgeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Badge"]
};
	/** Arguments for filtering the UserToCommentConnection connection */
["UserToCommentConnectionWhereArgs"]: GraphQLTypes["UserToCommentConnectionWhereArgs"];
	/** Options for ordering the connection */
["CommentsConnectionOrderbyEnum"]: GraphQLTypes["CommentsConnectionOrderbyEnum"];
	/** Connection between the User type and the Comment type */
["UserToCommentConnection"]: {
		/** Edges for the UserToCommentConnection connection */
	edges?:(ModelTypes["UserToCommentConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Comment"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToCommentConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Comment"]
};
	/** A Comment object */
["Comment"]: {
		/** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
	agent?:string,
	/** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
	approved?:boolean,
	/** The author of the comment */
	author?:ModelTypes["CommentToCommenterConnectionEdge"],
	/** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
	authorIp?:string,
	/** ID for the comment, unique among comments. */
	commentId?:number,
	/** Connection between the Comment type and the ContentNode type */
	commentedOn?:ModelTypes["CommentToContentNodeConnectionEdge"],
	/** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
	content?:string,
	/** The unique identifier stored in the database */
	databaseId:number,
	/** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
	date?:string,
	/** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
	dateGmt?:string,
	/** The globally unique identifier for the comment object */
	id:string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
	karma?:number,
	/** Connection between the Comment type and the Comment type */
	parent?:ModelTypes["CommentToParentCommentConnectionEdge"],
	/** The database id of the parent comment node or null if it is the root comment */
	parentDatabaseId?:number,
	/** The globally unique identifier of the parent comment node. */
	parentId?:string,
	/** Connection between the Comment type and the Comment type */
	replies?:ModelTypes["CommentToCommentConnection"],
	/** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
	type?:string
};
	/** Connection between the Comment type and the Commenter type */
["CommentToCommenterConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Commenter"]
};
	/** Connection between the Comment type and the ContentNode type */
["CommentToContentNodeConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["ContentNode"]
};
	/** The format of post field data. */
["PostObjectFieldFormatEnum"]: GraphQLTypes["PostObjectFieldFormatEnum"];
	/** Arguments for filtering the CommentToParentCommentConnection connection */
["CommentToParentCommentConnectionWhereArgs"]: GraphQLTypes["CommentToParentCommentConnectionWhereArgs"];
	/** Connection between the Comment type and the Comment type */
["CommentToParentCommentConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Comment"]
};
	/** Arguments for filtering the CommentToCommentConnection connection */
["CommentToCommentConnectionWhereArgs"]: GraphQLTypes["CommentToCommentConnectionWhereArgs"];
	/** Connection between the Comment type and the Comment type */
["CommentToCommentConnection"]: {
		/** Edges for the CommentToCommentConnection connection */
	edges?:(ModelTypes["CommentToCommentConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Comment"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CommentToCommentConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Comment"]
};
	/** Connection between the User type and the EnqueuedScript type */
["UserToEnqueuedScriptConnection"]: {
		/** Edges for the UserToEnqueuedScriptConnection connection */
	edges?:(ModelTypes["UserToEnqueuedScriptConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["EnqueuedScript"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToEnqueuedScriptConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["EnqueuedScript"]
};
	/** Script enqueued by the CMS */
["EnqueuedScript"]: {
		/** @todo */
	args?:boolean,
	/** Dependencies needed to use this asset */
	dependencies?:(ModelTypes["EnqueuedScript"] | undefined)[],
	/** Extra information needed for the script */
	extra?:string,
	/** The handle of the enqueued asset */
	handle?:string,
	/** The ID of the enqueued asset */
	id:string,
	/** The source of the asset */
	src?:string,
	/** The version of the enqueued asset */
	version?:string
};
	/** Asset enqueued by the CMS */
["EnqueuedAsset"]: ModelTypes["EnqueuedScript"] | ModelTypes["EnqueuedStylesheet"];
	/** Connection between the User type and the EnqueuedStylesheet type */
["UserToEnqueuedStylesheetConnection"]: {
		/** Edges for the UserToEnqueuedStylesheetConnection connection */
	edges?:(ModelTypes["UserToEnqueuedStylesheetConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["EnqueuedStylesheet"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToEnqueuedStylesheetConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["EnqueuedStylesheet"]
};
	/** Stylesheet enqueued by the CMS */
["EnqueuedStylesheet"]: {
		/** @todo */
	args?:boolean,
	/** Dependencies needed to use this asset */
	dependencies?:(ModelTypes["EnqueuedScript"] | undefined)[],
	/** Extra information needed for the script */
	extra?:string,
	/** The handle of the enqueued asset */
	handle?:string,
	/** The ID of the enqueued asset */
	id:string,
	/** The source of the asset */
	src?:string,
	/** The version of the enqueued asset */
	version?:string
};
	/** Arguments for filtering the UserToHeroConnection connection */
["UserToHeroConnectionWhereArgs"]: GraphQLTypes["UserToHeroConnectionWhereArgs"];
	/** Connection between the User type and the hero type */
["UserToHeroConnection"]: {
		/** Edges for the UserToHeroConnection connection */
	edges?:(ModelTypes["UserToHeroConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Hero"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToHeroConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Hero"]
};
	/** The hero type */
["Hero"]: {
		/** Connection between the NodeWithAuthor type and the User type */
	author?:ModelTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:number,
	/** The globally unique identifier of the author of the node */
	authorId?:string,
	/** Connection between the hero type and the badge type */
	awards?:ModelTypes["HeroToBadgeConnection"],
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ModelTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId:number,
	/** Post publishing date. */
	date?:string,
	/** The publishing date set in GMT. */
	dateGmt?:string,
	/** The desired slug of the post */
	desiredSlug?:string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ModelTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:string,
	/** The id field matches the WP_Post-&gt;ID field. */
	heroId:number,
	/** The globally unique identifier of the hero object. */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ModelTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:string,
	name?:string,
	/** Connection between the hero type and the hero type */
	preview?:ModelTypes["HeroToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:string,
	/** The current status of the object */
	status?:string,
	/** The template assigned to the node */
	template?:ModelTypes["ContentTemplate"],
	templates?:(string | undefined)[],
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?:string,
	/** The unique resource identifier path */
	uri?:string
};
	/** A node that can have a template associated with it */
["NodeWithTemplate"]: ModelTypes["Badge"] | ModelTypes["Hero"] | ModelTypes["MediaItem"] | ModelTypes["Page"] | ModelTypes["Post"] | ModelTypes["Movie"];
	/** The template assigned to a node of content */
["ContentTemplate"]: ModelTypes["DefaultTemplate"] | ModelTypes["CoverTemplate"] | ModelTypes["FullWidthTemplate"];
	/** A node that NodeWith a title */
["NodeWithTitle"]: ModelTypes["Badge"] | ModelTypes["Hero"] | ModelTypes["MediaItem"] | ModelTypes["Page"] | ModelTypes["Post"] | ModelTypes["Movie"];
	/** A node that can have an author assigned to it */
["NodeWithAuthor"]: ModelTypes["Badge"] | ModelTypes["Hero"] | ModelTypes["MediaItem"] | ModelTypes["Page"] | ModelTypes["Post"];
	/** Connection between the NodeWithAuthor type and the User type */
["NodeWithAuthorToUserConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["User"]
};
	/** Connection between the hero type and the badge type */
["HeroToBadgeConnection"]: {
		/** Edges for the HeroToBadgeConnection connection */
	edges?:(ModelTypes["HeroToBadgeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Badge"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["HeroToBadgeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Badge"]
};
	/** Connection between the ContentNode type and the EnqueuedScript type */
["ContentNodeToEnqueuedScriptConnection"]: {
		/** Edges for the ContentNodeToEnqueuedScriptConnection connection */
	edges?:(ModelTypes["ContentNodeToEnqueuedScriptConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["EnqueuedScript"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["ContentNodeToEnqueuedScriptConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["EnqueuedScript"]
};
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
["ContentNodeToEnqueuedStylesheetConnection"]: {
		/** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
	edges?:(ModelTypes["ContentNodeToEnqueuedStylesheetConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["EnqueuedStylesheet"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["ContentNodeToEnqueuedStylesheetConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["EnqueuedStylesheet"]
};
	/** Connection between the ContentNode type and the User type */
["ContentNodeToEditLastConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["User"]
};
	/** Connection between the hero type and the hero type */
["HeroToPreviewConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Hero"]
};
	/** Arguments for filtering the UserToMediaItemConnection connection */
["UserToMediaItemConnectionWhereArgs"]: GraphQLTypes["UserToMediaItemConnectionWhereArgs"];
	/** Connection between the User type and the mediaItem type */
["UserToMediaItemConnection"]: {
		/** Edges for the UserToMediaItemConnection connection */
	edges?:(ModelTypes["UserToMediaItemConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["MediaItem"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToMediaItemConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["MediaItem"]
};
	/** The mediaItem type */
["MediaItem"]: {
		/** Alternative text to display when resource is not displayed */
	altText?:string,
	/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?:ModelTypes["HierarchicalContentNodeToContentNodeAncestorsConnection"],
	/** Connection between the NodeWithAuthor type and the User type */
	author?:ModelTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:number,
	/** The globally unique identifier of the author of the node */
	authorId?:string,
	/** The caption for the resource */
	caption?:string,
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children?:ModelTypes["HierarchicalContentNodeToContentNodeChildrenConnection"],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?:number,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?:string,
	/** Connection between the mediaItem type and the Comment type */
	comments?:ModelTypes["MediaItemToCommentConnection"],
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ModelTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId:number,
	/** Post publishing date. */
	date?:string,
	/** The publishing date set in GMT. */
	dateGmt?:string,
	/** Description of the image (stored as post_content) */
	description?:string,
	/** The desired slug of the post */
	desiredSlug?:string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ModelTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The filesize in bytes of the resource */
	fileSize?:number,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:string,
	/** The globally unique identifier of the attachment object. */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ModelTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:string,
	/** Details about the mediaItem */
	mediaDetails?:ModelTypes["MediaDetails"],
	/** The id field matches the WP_Post-&gt;ID field. */
	mediaItemId:number,
	/** Url of the mediaItem */
	mediaItemUrl?:string,
	/** Type of resource */
	mediaType?:string,
	/** The mime type of the mediaItem */
	mimeType?:string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:string,
	/** The parent of the node. The parent object can be of various types */
	parent?:ModelTypes["HierarchicalContentNodeToParentContentNodeConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?:number,
	/** The globally unique identifier of the parent node. */
	parentId?:string,
	/** The database id of the preview node */
	previewRevisionDatabaseId?:number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:string,
	/** The sizes attribute value for an image. */
	sizes?:string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:string,
	/** Url of the mediaItem */
	sourceUrl?:string,
	/** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
	srcSet?:string,
	/** The current status of the object */
	status?:string,
	/** The template assigned to the node */
	template?:ModelTypes["ContentTemplate"],
	templates?:(string | undefined)[],
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?:string,
	/** The unique resource identifier path */
	uri?:string
};
	/** A node that can have comments associated with it */
["NodeWithComments"]: ModelTypes["MediaItem"] | ModelTypes["Page"] | ModelTypes["Post"];
	/** Content node with hierarchical (parent/child) relationships */
["HierarchicalContentNode"]: ModelTypes["MediaItem"] | ModelTypes["Page"];
	/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
["HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"]: GraphQLTypes["HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"];
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToContentNodeAncestorsConnection"]: {
		/** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
	edges?:(ModelTypes["HierarchicalContentNodeToContentNodeAncestorsConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["HierarchicalContentNodeToContentNodeAncestorsConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentNode"]
};
	/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
["HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"]: GraphQLTypes["HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"];
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToContentNodeChildrenConnection"]: {
		/** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
	edges?:(ModelTypes["HierarchicalContentNodeToContentNodeChildrenConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["HierarchicalContentNodeToContentNodeChildrenConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentNode"]
};
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToParentContentNodeConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["ContentNode"]
};
	/** Arguments for filtering the MediaItemToCommentConnection connection */
["MediaItemToCommentConnectionWhereArgs"]: GraphQLTypes["MediaItemToCommentConnectionWhereArgs"];
	/** Connection between the mediaItem type and the Comment type */
["MediaItemToCommentConnection"]: {
		/** Edges for the MediaItemToCommentConnection connection */
	edges?:(ModelTypes["MediaItemToCommentConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Comment"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["MediaItemToCommentConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Comment"]
};
	/** The size of the media item object. */
["MediaItemSizeEnum"]: GraphQLTypes["MediaItemSizeEnum"];
	/** File details for a Media Item */
["MediaDetails"]: {
		/** The filename of the mediaItem */
	file?:string,
	/** The height of the mediaItem */
	height?:number,
	/** Meta information associated with the mediaItem */
	meta?:ModelTypes["MediaItemMeta"],
	/** The available sizes of the mediaItem */
	sizes?:(ModelTypes["MediaSize"] | undefined)[],
	/** The width of the mediaItem */
	width?:number
};
	/** Meta connected to a MediaItem */
["MediaItemMeta"]: {
		/** Aperture measurement of the media item. */
	aperture?:number,
	/** Information about the camera used to create the media item. */
	camera?:string,
	/** The text string description associated with the media item. */
	caption?:string,
	/** Copyright information associated with the media item. */
	copyright?:string,
	/** The date/time when the media was created. */
	createdTimestamp?:number,
	/** The original creator of the media item. */
	credit?:string,
	/** The focal length value of the media item. */
	focalLength?:number,
	/** The ISO (International Organization for Standardization) value of the media item. */
	iso?:number,
	/** List of keywords used to describe or identfy the media item. */
	keywords?:(string | undefined)[],
	/** The vertical or horizontal aspect of the media item. */
	orientation?:string,
	/** The shutter speed information of the media item. */
	shutterSpeed?:number,
	/** A useful title for the media item. */
	title?:string
};
	/** Details of an available size for a media item */
["MediaSize"]: {
		/** The filename of the referenced size */
	file?:string,
	/** The filesize of the resource */
	fileSize?:number,
	/** The height of the referenced size */
	height?:string,
	/** The mime type of the referenced size */
	mimeType?:string,
	/** The referenced size name */
	name?:string,
	/** The url of the referenced size */
	sourceUrl?:string,
	/** The width of the referenced size */
	width?:string
};
	/** Arguments for filtering the UserToPageConnection connection */
["UserToPageConnectionWhereArgs"]: GraphQLTypes["UserToPageConnectionWhereArgs"];
	/** Connection between the User type and the page type */
["UserToPageConnection"]: {
		/** Edges for the UserToPageConnection connection */
	edges?:(ModelTypes["UserToPageConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Page"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToPageConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Page"]
};
	/** The page type */
["Page"]: {
		/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?:ModelTypes["HierarchicalContentNodeToContentNodeAncestorsConnection"],
	/** Connection between the NodeWithAuthor type and the User type */
	author?:ModelTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:number,
	/** The globally unique identifier of the author of the node */
	authorId?:string,
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children?:ModelTypes["HierarchicalContentNodeToContentNodeChildrenConnection"],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?:number,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?:string,
	/** Connection between the page type and the Comment type */
	comments?:ModelTypes["PageToCommentConnection"],
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** The content of the post. */
	content?:string,
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ModelTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId:number,
	/** Post publishing date. */
	date?:string,
	/** The publishing date set in GMT. */
	dateGmt?:string,
	/** The desired slug of the post */
	desiredSlug?:string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ModelTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?:ModelTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?:number,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?:string,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:string,
	/** The globally unique identifier of the page object. */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether this page is set to the static front page. */
	isFrontPage:boolean,
	/** Whether this page is set to the blog posts page. */
	isPostsPage:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether this page is set to the privacy page. */
	isPrivacyPage:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** True if the node is a revision of another node */
	isRevision?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ModelTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?:number,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:string,
	/** The id field matches the WP_Post-&gt;ID field. */
	pageId:number,
	/** The parent of the node. The parent object can be of various types */
	parent?:ModelTypes["HierarchicalContentNodeToParentContentNodeConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?:number,
	/** The globally unique identifier of the parent node. */
	parentId?:string,
	/** Connection between the page type and the page type */
	preview?:ModelTypes["PageToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:string,
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?:ModelTypes["NodeWithRevisionsToContentNodeConnectionEdge"],
	/** Connection between the page type and the page type */
	revisions?:ModelTypes["PageToRevisionConnection"],
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:string,
	/** The current status of the object */
	status?:string,
	/** The template assigned to a node of content */
	template?:ModelTypes["ContentTemplate"],
	templates?:(string | undefined)[],
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?:string,
	/** The unique resource identifier path */
	uri?:string
};
	/** A node that supports the content editor */
["NodeWithContentEditor"]: ModelTypes["Page"] | ModelTypes["Post"] | ModelTypes["Movie"];
	/** A node that can have a featured image set */
["NodeWithFeaturedImage"]: ModelTypes["Page"] | ModelTypes["Post"] | ModelTypes["Movie"];
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
["NodeWithFeaturedImageToMediaItemConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["MediaItem"]
};
	/** A node that can have revisions */
["NodeWithRevisions"]: ModelTypes["Page"] | ModelTypes["Post"];
	/** Connection between the NodeWithRevisions type and the ContentNode type */
["NodeWithRevisionsToContentNodeConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["ContentNode"]
};
	/** A node that can have page attributes */
["NodeWithPageAttributes"]: ModelTypes["Page"];
	/** Nodes that can be linked to as Menu Items */
["MenuItemLinkable"]: ModelTypes["Page"] | ModelTypes["Post"] | ModelTypes["Category"] | ModelTypes["Tag"] | ModelTypes["Movie"];
	/** Arguments for filtering the PageToCommentConnection connection */
["PageToCommentConnectionWhereArgs"]: GraphQLTypes["PageToCommentConnectionWhereArgs"];
	/** Connection between the page type and the Comment type */
["PageToCommentConnection"]: {
		/** Edges for the PageToCommentConnection connection */
	edges?:(ModelTypes["PageToCommentConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Comment"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PageToCommentConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Comment"]
};
	/** Connection between the page type and the page type */
["PageToPreviewConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Page"]
};
	/** Arguments for filtering the pageToRevisionConnection connection */
["PageToRevisionConnectionWhereArgs"]: GraphQLTypes["PageToRevisionConnectionWhereArgs"];
	/** Connection between the page type and the page type */
["PageToRevisionConnection"]: {
		/** Edges for the pageToRevisionConnection connection */
	edges?:(ModelTypes["PageToRevisionConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Page"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PageToRevisionConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Page"]
};
	/** Arguments for filtering the UserToPostConnection connection */
["UserToPostConnectionWhereArgs"]: GraphQLTypes["UserToPostConnectionWhereArgs"];
	/** Connection between the User type and the post type */
["UserToPostConnection"]: {
		/** Edges for the UserToPostConnection connection */
	edges?:(ModelTypes["UserToPostConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Post"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToPostConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Post"]
};
	/** The post type */
["Post"]: {
		/** Connection between the NodeWithAuthor type and the User type */
	author?:ModelTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?:number,
	/** The globally unique identifier of the author of the node */
	authorId?:string,
	/** Connection between the post type and the category type */
	categories?:ModelTypes["PostToCategoryConnection"],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?:number,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?:string,
	/** Connection between the post type and the Comment type */
	comments?:ModelTypes["PostToCommentConnection"],
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** The content of the post. */
	content?:string,
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ModelTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId:number,
	/** Post publishing date. */
	date?:string,
	/** The publishing date set in GMT. */
	dateGmt?:string,
	/** The desired slug of the post */
	desiredSlug?:string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ModelTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The excerpt of the post. */
	excerpt?:string,
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?:ModelTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?:number,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?:string,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:string,
	/** The globally unique identifier of the post object. */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** True if the node is a revision of another node */
	isRevision?:boolean,
	/** Whether this page is sticky */
	isSticky:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ModelTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:string,
	/** Whether the pings are open or closed for this particular post. */
	pingStatus?:string,
	/** URLs that have been pinged. */
	pinged?:(string | undefined)[],
	/** Connection between the post type and the postFormat type */
	postFormats?:ModelTypes["PostToPostFormatConnection"],
	/** The id field matches the WP_Post-&gt;ID field. */
	postId:number,
	/** Connection between the post type and the post type */
	preview?:ModelTypes["PostToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:string,
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?:ModelTypes["NodeWithRevisionsToContentNodeConnectionEdge"],
	/** Connection between the post type and the post type */
	revisions?:ModelTypes["PostToRevisionConnection"],
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:string,
	/** The current status of the object */
	status?:string,
	/** Connection between the post type and the tag type */
	tags?:ModelTypes["PostToTagConnection"],
	/** The template assigned to a node of content */
	template?:ModelTypes["ContentTemplate"],
	templates?:(string | undefined)[],
	/** Connection between the post type and the TermNode type */
	terms?:ModelTypes["PostToTermNodeConnection"],
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?:string,
	/** URLs queued to be pinged. */
	toPing?:(string | undefined)[],
	/** The unique resource identifier path */
	uri?:string
};
	/** A node that can have an excerpt */
["NodeWithExcerpt"]: ModelTypes["Post"];
	/** A node that can have trackbacks and pingbacks */
["NodeWithTrackbacks"]: ModelTypes["Post"];
	/** Arguments for filtering the PostToCategoryConnection connection */
["PostToCategoryConnectionWhereArgs"]: GraphQLTypes["PostToCategoryConnectionWhereArgs"];
	/** Options for ordering the connection by */
["TermObjectsConnectionOrderbyEnum"]: GraphQLTypes["TermObjectsConnectionOrderbyEnum"];
	/** Connection between the post type and the category type */
["PostToCategoryConnection"]: {
		/** Edges for the PostToCategoryConnection connection */
	edges?:(ModelTypes["PostToCategoryConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Category"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToCategoryConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Category"]
};
	/** The category type */
["Category"]: {
		/** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?:ModelTypes["CategoryToAncestorsCategoryConnection"],
	/** The id field matches the WP_Post-&gt;ID field. */
	categoryId?:number,
	/** Connection between the category type and the category type */
	children?:ModelTypes["CategoryToCategoryConnection"],
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** Connection between the category type and the ContentNode type */
	contentNodes?:ModelTypes["CategoryToContentNodeConnection"],
	/** The number of objects connected to the object */
	count?:number,
	/** The unique resource identifier path */
	databaseId:number,
	/** The description of the object */
	description?:string,
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["TermNodeToEnqueuedScriptConnection"],
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["TermNodeToEnqueuedStylesheetConnection"],
	/** The unique resource identifier path */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The link to the term */
	link?:string,
	/** The human friendly name of the object. */
	name?:string,
	/** Connection between the category type and the category type */
	parent?:ModelTypes["CategoryToParentCategoryConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?:number,
	/** The globally unique identifier of the parent node. */
	parentId?:string,
	/** Connection between the category type and the post type */
	posts?:ModelTypes["CategoryToPostConnection"],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?:string,
	/** Connection between the category type and the Taxonomy type */
	taxonomy?:ModelTypes["CategoryToTaxonomyConnectionEdge"],
	templates?:(string | undefined)[],
	/** The ID of the term group that this term object belongs to */
	termGroupId?:number,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?:number,
	/** The unique resource identifier path */
	uri?:string
};
	/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
["TermNode"]: ModelTypes["Category"] | ModelTypes["PostFormat"] | ModelTypes["Tag"];
	/** Connection between the TermNode type and the EnqueuedScript type */
["TermNodeToEnqueuedScriptConnection"]: {
		/** Edges for the TermNodeToEnqueuedScriptConnection connection */
	edges?:(ModelTypes["TermNodeToEnqueuedScriptConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["EnqueuedScript"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TermNodeToEnqueuedScriptConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["EnqueuedScript"]
};
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
["TermNodeToEnqueuedStylesheetConnection"]: {
		/** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
	edges?:(ModelTypes["TermNodeToEnqueuedStylesheetConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["EnqueuedStylesheet"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TermNodeToEnqueuedStylesheetConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["EnqueuedStylesheet"]
};
	/** Term node with hierarchical (parent/child) relationships */
["HierarchicalTermNode"]: ModelTypes["Category"];
	/** Connection between the category type and the category type */
["CategoryToAncestorsCategoryConnection"]: {
		/** Edges for the CategoryToAncestorsCategoryConnection connection */
	edges?:(ModelTypes["CategoryToAncestorsCategoryConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Category"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CategoryToAncestorsCategoryConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Category"]
};
	/** Arguments for filtering the CategoryToCategoryConnection connection */
["CategoryToCategoryConnectionWhereArgs"]: GraphQLTypes["CategoryToCategoryConnectionWhereArgs"];
	/** Connection between the category type and the category type */
["CategoryToCategoryConnection"]: {
		/** Edges for the CategoryToCategoryConnection connection */
	edges?:(ModelTypes["CategoryToCategoryConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Category"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CategoryToCategoryConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Category"]
};
	/** Arguments for filtering the CategoryToContentNodeConnection connection */
["CategoryToContentNodeConnectionWhereArgs"]: GraphQLTypes["CategoryToContentNodeConnectionWhereArgs"];
	/** Allowed Content Types of the Category taxonomy. */
["ContentTypesOfCategoryEnum"]: GraphQLTypes["ContentTypesOfCategoryEnum"];
	/** Connection between the category type and the ContentNode type */
["CategoryToContentNodeConnection"]: {
		/** Edges for the CategoryToContentNodeConnection connection */
	edges?:(ModelTypes["CategoryToContentNodeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CategoryToContentNodeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentNode"]
};
	/** Connection between the category type and the category type */
["CategoryToParentCategoryConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Category"]
};
	/** Arguments for filtering the CategoryToPostConnection connection */
["CategoryToPostConnectionWhereArgs"]: GraphQLTypes["CategoryToPostConnectionWhereArgs"];
	/** Connection between the category type and the post type */
["CategoryToPostConnection"]: {
		/** Edges for the CategoryToPostConnection connection */
	edges?:(ModelTypes["CategoryToPostConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Post"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CategoryToPostConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Post"]
};
	/** Connection between the category type and the Taxonomy type */
["CategoryToTaxonomyConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Taxonomy"]
};
	/** Arguments for filtering the PostToCommentConnection connection */
["PostToCommentConnectionWhereArgs"]: GraphQLTypes["PostToCommentConnectionWhereArgs"];
	/** Connection between the post type and the Comment type */
["PostToCommentConnection"]: {
		/** Edges for the PostToCommentConnection connection */
	edges?:(ModelTypes["PostToCommentConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Comment"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToCommentConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Comment"]
};
	/** Arguments for filtering the PostToPostFormatConnection connection */
["PostToPostFormatConnectionWhereArgs"]: GraphQLTypes["PostToPostFormatConnectionWhereArgs"];
	/** Connection between the post type and the postFormat type */
["PostToPostFormatConnection"]: {
		/** Edges for the PostToPostFormatConnection connection */
	edges?:(ModelTypes["PostToPostFormatConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["PostFormat"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToPostFormatConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["PostFormat"]
};
	/** The postFormat type */
["PostFormat"]: {
		conditionalTags?:ModelTypes["ConditionalTags"],
	/** Connection between the postFormat type and the ContentNode type */
	contentNodes?:ModelTypes["PostFormatToContentNodeConnection"],
	/** The number of objects connected to the object */
	count?:number,
	/** The unique identifier stored in the database */
	databaseId:number,
	/** The description of the object */
	description?:string,
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["TermNodeToEnqueuedScriptConnection"],
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["TermNodeToEnqueuedStylesheetConnection"],
	/** The unique resource identifier path */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The link to the term */
	link?:string,
	/** The human friendly name of the object. */
	name?:string,
	/** The id field matches the WP_Post-&gt;ID field. */
	postFormatId?:number,
	/** Connection between the postFormat type and the post type */
	posts?:ModelTypes["PostFormatToPostConnection"],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?:string,
	/** Connection between the postFormat type and the Taxonomy type */
	taxonomy?:ModelTypes["PostFormatToTaxonomyConnectionEdge"],
	templates?:(string | undefined)[],
	/** The ID of the term group that this term object belongs to */
	termGroupId?:number,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?:number,
	/** The unique resource identifier path */
	uri?:string
};
	/** Arguments for filtering the PostFormatToContentNodeConnection connection */
["PostFormatToContentNodeConnectionWhereArgs"]: GraphQLTypes["PostFormatToContentNodeConnectionWhereArgs"];
	/** Allowed Content Types of the PostFormat taxonomy. */
["ContentTypesOfPostFormatEnum"]: GraphQLTypes["ContentTypesOfPostFormatEnum"];
	/** Connection between the postFormat type and the ContentNode type */
["PostFormatToContentNodeConnection"]: {
		/** Edges for the PostFormatToContentNodeConnection connection */
	edges?:(ModelTypes["PostFormatToContentNodeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostFormatToContentNodeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentNode"]
};
	/** Arguments for filtering the PostFormatToPostConnection connection */
["PostFormatToPostConnectionWhereArgs"]: GraphQLTypes["PostFormatToPostConnectionWhereArgs"];
	/** Connection between the postFormat type and the post type */
["PostFormatToPostConnection"]: {
		/** Edges for the PostFormatToPostConnection connection */
	edges?:(ModelTypes["PostFormatToPostConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Post"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostFormatToPostConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Post"]
};
	/** Connection between the postFormat type and the Taxonomy type */
["PostFormatToTaxonomyConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Taxonomy"]
};
	/** Connection between the post type and the post type */
["PostToPreviewConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Post"]
};
	/** Arguments for filtering the postToRevisionConnection connection */
["PostToRevisionConnectionWhereArgs"]: GraphQLTypes["PostToRevisionConnectionWhereArgs"];
	/** Connection between the post type and the post type */
["PostToRevisionConnection"]: {
		/** Edges for the postToRevisionConnection connection */
	edges?:(ModelTypes["PostToRevisionConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Post"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToRevisionConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Post"]
};
	/** Arguments for filtering the PostToTagConnection connection */
["PostToTagConnectionWhereArgs"]: GraphQLTypes["PostToTagConnectionWhereArgs"];
	/** Connection between the post type and the tag type */
["PostToTagConnection"]: {
		/** Edges for the PostToTagConnection connection */
	edges?:(ModelTypes["PostToTagConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Tag"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToTagConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Tag"]
};
	/** The tag type */
["Tag"]: {
		conditionalTags?:ModelTypes["ConditionalTags"],
	/** Connection between the tag type and the ContentNode type */
	contentNodes?:ModelTypes["TagToContentNodeConnection"],
	/** The number of objects connected to the object */
	count?:number,
	/** The unique resource identifier path */
	databaseId:number,
	/** The description of the object */
	description?:string,
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["TermNodeToEnqueuedScriptConnection"],
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["TermNodeToEnqueuedStylesheetConnection"],
	/** The unique resource identifier path */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The link to the term */
	link?:string,
	/** The human friendly name of the object. */
	name?:string,
	/** Connection between the tag type and the post type */
	posts?:ModelTypes["TagToPostConnection"],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?:string,
	/** The id field matches the WP_Post-&gt;ID field. */
	tagId?:number,
	/** Connection between the tag type and the Taxonomy type */
	taxonomy?:ModelTypes["TagToTaxonomyConnectionEdge"],
	templates?:(string | undefined)[],
	/** The ID of the term group that this term object belongs to */
	termGroupId?:number,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?:number,
	/** The unique resource identifier path */
	uri?:string
};
	/** Arguments for filtering the TagToContentNodeConnection connection */
["TagToContentNodeConnectionWhereArgs"]: GraphQLTypes["TagToContentNodeConnectionWhereArgs"];
	/** Allowed Content Types of the Tag taxonomy. */
["ContentTypesOfTagEnum"]: GraphQLTypes["ContentTypesOfTagEnum"];
	/** Connection between the tag type and the ContentNode type */
["TagToContentNodeConnection"]: {
		/** Edges for the TagToContentNodeConnection connection */
	edges?:(ModelTypes["TagToContentNodeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TagToContentNodeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentNode"]
};
	/** Arguments for filtering the TagToPostConnection connection */
["TagToPostConnectionWhereArgs"]: GraphQLTypes["TagToPostConnectionWhereArgs"];
	/** Connection between the tag type and the post type */
["TagToPostConnection"]: {
		/** Edges for the TagToPostConnection connection */
	edges?:(ModelTypes["TagToPostConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Post"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TagToPostConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Post"]
};
	/** Connection between the tag type and the Taxonomy type */
["TagToTaxonomyConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Taxonomy"]
};
	/** Arguments for filtering the PostToTermNodeConnection connection */
["PostToTermNodeConnectionWhereArgs"]: GraphQLTypes["PostToTermNodeConnectionWhereArgs"];
	/** Allowed taxonomies */
["TaxonomyEnum"]: GraphQLTypes["TaxonomyEnum"];
	/** Connection between the post type and the TermNode type */
["PostToTermNodeConnection"]: {
		/** Edges for the PostToTermNodeConnection connection */
	edges?:(ModelTypes["PostToTermNodeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["TermNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToTermNodeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["TermNode"]
};
	/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
["UserToContentRevisionUnionConnectionWhereArgs"]: GraphQLTypes["UserToContentRevisionUnionConnectionWhereArgs"];
	/** Connection between the User type and the ContentRevisionUnion type */
["UserToContentRevisionUnionConnection"]: {
		/** Edges for the UserToContentRevisionUnionConnection connection */
	edges?:(ModelTypes["UserToContentRevisionUnionConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentRevisionUnion"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToContentRevisionUnionConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentRevisionUnion"]
};
	/** A union of Content Node Types that support revisions */
["ContentRevisionUnion"]:ModelTypes["Post"] | ModelTypes["Page"];
	/** Connection between the User type and the UserRole type */
["UserToUserRoleConnection"]: {
		/** Edges for the UserToUserRoleConnection connection */
	edges?:(ModelTypes["UserToUserRoleConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["UserRole"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToUserRoleConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["UserRole"]
};
	/** A user role object */
["UserRole"]: {
		/** The capabilities that belong to this role */
	capabilities?:(string | undefined)[],
	/** The display name of the role */
	displayName?:string,
	/** The globally unique identifier for the user role object. */
	id:string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** The registered name of the role */
	name?:string
};
	/** Connection between the badge type and the hero type */
["BadgeToHeroConnection"]: {
		/** Edges for the BadgeToHeroConnection connection */
	edges?:(ModelTypes["BadgeToHeroConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Hero"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["BadgeToHeroConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Hero"]
};
	/** Connection between the badge type and the badge type */
["BadgeToPreviewConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Badge"]
};
	/** Arguments for filtering the RootQueryToBadgeConnection connection */
["RootQueryToBadgeConnectionWhereArgs"]: GraphQLTypes["RootQueryToBadgeConnectionWhereArgs"];
	/** Connection between the RootQuery type and the badge type */
["RootQueryToBadgeConnection"]: {
		/** Edges for the RootQueryToBadgeConnection connection */
	edges?:(ModelTypes["RootQueryToBadgeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Badge"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToBadgeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Badge"]
};
	/** Arguments for filtering the RootQueryToCategoryConnection connection */
["RootQueryToCategoryConnectionWhereArgs"]: GraphQLTypes["RootQueryToCategoryConnectionWhereArgs"];
	/** Connection between the RootQuery type and the category type */
["RootQueryToCategoryConnection"]: {
		/** Edges for the RootQueryToCategoryConnection connection */
	edges?:(ModelTypes["RootQueryToCategoryConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Category"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToCategoryConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Category"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["CategoryIdType"]: GraphQLTypes["CategoryIdType"];
	/** Arguments for filtering the RootQueryToCommentConnection connection */
["RootQueryToCommentConnectionWhereArgs"]: GraphQLTypes["RootQueryToCommentConnectionWhereArgs"];
	/** Connection between the RootQuery type and the Comment type */
["RootQueryToCommentConnection"]: {
		/** Edges for the RootQueryToCommentConnection connection */
	edges?:(ModelTypes["RootQueryToCommentConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Comment"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToCommentConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Comment"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["ContentNodeIdTypeEnum"]: GraphQLTypes["ContentNodeIdTypeEnum"];
	/** Arguments for filtering the RootQueryToContentNodeConnection connection */
["RootQueryToContentNodeConnectionWhereArgs"]: GraphQLTypes["RootQueryToContentNodeConnectionWhereArgs"];
	/** Connection between the RootQuery type and the ContentNode type */
["RootQueryToContentNodeConnection"]: {
		/** Edges for the RootQueryToContentNodeConnection connection */
	edges?:(ModelTypes["RootQueryToContentNodeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToContentNodeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentNode"]
};
	/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
["ContentTypeIdTypeEnum"]: GraphQLTypes["ContentTypeIdTypeEnum"];
	/** Connection between the RootQuery type and the ContentType type */
["RootQueryToContentTypeConnection"]: {
		/** Edges for the RootQueryToContentTypeConnection connection */
	edges?:(ModelTypes["RootQueryToContentTypeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentType"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToContentTypeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentType"]
};
	/** The discussion setting type */
["DiscussionSettings"]: {
		/** Allow people to submit comments on new posts. */
	defaultCommentStatus?:string,
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	defaultPingStatus?:string
};
	/** The general setting type */
["GeneralSettings"]: {
		/** A date format for all date strings. */
	dateFormat?:string,
	/** Site tagline. */
	description?:string,
	/** This address is used for admin purposes, like new user notification. */
	email?:string,
	/** WordPress locale code. */
	language?:string,
	/** A day number of the week that the week should start on. */
	startOfWeek?:number,
	/** A time format for all time strings. */
	timeFormat?:string,
	/** A city in the same timezone as you. */
	timezone?:string,
	/** Site title. */
	title?:string,
	/** Site URL. */
	url?:string
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["HeroIdType"]: GraphQLTypes["HeroIdType"];
	/** Arguments for filtering the RootQueryToHeroConnection connection */
["RootQueryToHeroConnectionWhereArgs"]: GraphQLTypes["RootQueryToHeroConnectionWhereArgs"];
	/** Connection between the RootQuery type and the hero type */
["RootQueryToHeroConnection"]: {
		/** Edges for the RootQueryToHeroConnection connection */
	edges?:(ModelTypes["RootQueryToHeroConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Hero"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToHeroConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Hero"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["MediaItemIdType"]: GraphQLTypes["MediaItemIdType"];
	/** Arguments for filtering the RootQueryToMediaItemConnection connection */
["RootQueryToMediaItemConnectionWhereArgs"]: GraphQLTypes["RootQueryToMediaItemConnectionWhereArgs"];
	/** Connection between the RootQuery type and the mediaItem type */
["RootQueryToMediaItemConnection"]: {
		/** Edges for the RootQueryToMediaItemConnection connection */
	edges?:(ModelTypes["RootQueryToMediaItemConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["MediaItem"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToMediaItemConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["MediaItem"]
};
	/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
["MenuNodeIdTypeEnum"]: GraphQLTypes["MenuNodeIdTypeEnum"];
	/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
["Menu"]: {
		/** The number of items in the menu */
	count?:number,
	/** The unique identifier stored in the database */
	databaseId:number,
	/** The globally unique identifier of the nav menu object. */
	id:string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** The locations a menu is assigned to */
	locations?:(ModelTypes["MenuLocationEnum"] | undefined)[],
	/** WP ID of the nav menu. */
	menuId?:number,
	/** Connection between the Menu type and the MenuItem type */
	menuItems?:ModelTypes["MenuToMenuItemConnection"],
	/** Display name of the menu. Equivalent to WP_Term-&gt;name. */
	name?:string,
	/** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
	slug?:string
};
	/** Registered menu locations */
["MenuLocationEnum"]: GraphQLTypes["MenuLocationEnum"];
	/** Arguments for filtering the MenuToMenuItemConnection connection */
["MenuToMenuItemConnectionWhereArgs"]: GraphQLTypes["MenuToMenuItemConnectionWhereArgs"];
	/** Connection between the Menu type and the MenuItem type */
["MenuToMenuItemConnection"]: {
		/** Edges for the MenuToMenuItemConnection connection */
	edges?:(ModelTypes["MenuToMenuItemConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["MenuItem"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["MenuToMenuItemConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["MenuItem"]
};
	/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
["MenuItem"]: {
		/** Connection between the MenuItem type and the MenuItem type */
	childItems?:ModelTypes["MenuItemToMenuItemConnection"],
	/** Connection from MenuItem to it&#039;s connected node */
	connectedNode?:ModelTypes["MenuItemToMenuItemLinkableConnectionEdge"],
	/** The object connected to this menu item. */
	connectedObject?:ModelTypes["MenuItemObjectUnion"],
	/** Class attribute for the menu item link */
	cssClasses?:(string | undefined)[],
	/** The unique identifier stored in the database */
	databaseId:number,
	/** Description of the menu item. */
	description?:string,
	/** The globally unique identifier of the nav menu item object. */
	id:string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Label or title of the menu item. */
	label?:string,
	/** Link relationship (XFN) of the menu item. */
	linkRelationship?:string,
	/** The locations the menu item&#039;s Menu is assigned to */
	locations?:(ModelTypes["MenuLocationEnum"] | undefined)[],
	/** The Menu a MenuItem is part of */
	menu?:ModelTypes["MenuItemToMenuConnectionEdge"],
	/** WP ID of the menu item. */
	menuItemId?:number,
	/** Menu item order */
	order?:number,
	/** The database id of the parent menu item or null if it is the root */
	parentDatabaseId?:number,
	/** The globally unique identifier of the parent nav menu item object. */
	parentId?:string,
	/** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
	path?:string,
	/** Target attribute for the menu item link. */
	target?:string,
	/** Title attribute for the menu item link */
	title?:string,
	/** URL or destination of the menu item. */
	url?:string
};
	/** Arguments for filtering the MenuItemToMenuItemConnection connection */
["MenuItemToMenuItemConnectionWhereArgs"]: GraphQLTypes["MenuItemToMenuItemConnectionWhereArgs"];
	/** Connection between the MenuItem type and the MenuItem type */
["MenuItemToMenuItemConnection"]: {
		/** Edges for the MenuItemToMenuItemConnection connection */
	edges?:(ModelTypes["MenuItemToMenuItemConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["MenuItem"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["MenuItemToMenuItemConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["MenuItem"]
};
	/** Connection between the MenuItem type and the MenuItemLinkable type */
["MenuItemToMenuItemLinkableConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["MenuItemLinkable"]
};
	/** Deprecated in favor of MenuItemLinkeable Interface */
["MenuItemObjectUnion"]:ModelTypes["Post"] | ModelTypes["Page"] | ModelTypes["Movie"] | ModelTypes["Category"] | ModelTypes["Tag"];
	/** The Movie type */
["Movie"]: {
		/** The id field matches the WP_Post-&gt;ID field. */
	movieId:number,
	conditionalTags?:ModelTypes["ConditionalTags"],
	/** The content of the post. */
	content?:string,
	/** Connection between the ContentNode type and the ContentType type */
	contentType?:ModelTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId:number,
	/** Post publishing date. */
	date?:string,
	/** The publishing date set in GMT. */
	dateGmt?:string,
	/** The desired slug of the post */
	desiredSlug?:string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?:ModelTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?:string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?:ModelTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?:ModelTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?:ModelTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?:number,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?:string,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?:string,
	/** The globally unique identifier of the movie object. */
	id:string,
	/** Whether the node is a Content Node */
	isContentNode:boolean,
	/** Whether the object is a node in the preview state */
	isPreview?:boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Whether the node is a Term */
	isTermNode:boolean,
	/** The user that most recently edited the node */
	lastEditedBy?:ModelTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?:string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?:string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?:string,
	/** Connection between the Movie type and the Movie type */
	preview?:ModelTypes["MovieToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?:number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?:string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?:string,
	/** The current status of the object */
	status?:string,
	/** The template assigned to a node of content */
	template?:ModelTypes["ContentTemplate"],
	templates?:(string | undefined)[],
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?:string,
	/** The unique resource identifier path */
	uri?:string
};
	/** Connection between the Movie type and the Movie type */
["MovieToPreviewConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Movie"]
};
	/** Connection between the MenuItem type and the Menu type */
["MenuItemToMenuConnectionEdge"]: {
		/** The node of the connection, without the edges */
	node?:ModelTypes["Menu"]
};
	/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
["MenuItemNodeIdTypeEnum"]: GraphQLTypes["MenuItemNodeIdTypeEnum"];
	/** Arguments for filtering the RootQueryToMenuItemConnection connection */
["RootQueryToMenuItemConnectionWhereArgs"]: GraphQLTypes["RootQueryToMenuItemConnectionWhereArgs"];
	/** Connection between the RootQuery type and the MenuItem type */
["RootQueryToMenuItemConnection"]: {
		/** Edges for the RootQueryToMenuItemConnection connection */
	edges?:(ModelTypes["RootQueryToMenuItemConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["MenuItem"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToMenuItemConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["MenuItem"]
};
	/** Arguments for filtering the RootQueryToMenuConnection connection */
["RootQueryToMenuConnectionWhereArgs"]: GraphQLTypes["RootQueryToMenuConnectionWhereArgs"];
	/** Connection between the RootQuery type and the Menu type */
["RootQueryToMenuConnection"]: {
		/** Edges for the RootQueryToMenuConnection connection */
	edges?:(ModelTypes["RootQueryToMenuConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Menu"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToMenuConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Menu"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["MovieIdType"]: GraphQLTypes["MovieIdType"];
	/** Arguments for filtering the RootQueryToMovieConnection connection */
["RootQueryToMovieConnectionWhereArgs"]: GraphQLTypes["RootQueryToMovieConnectionWhereArgs"];
	/** Connection between the RootQuery type and the Movie type */
["RootQueryToMovieConnection"]: {
		/** Edges for the RootQueryToMovieConnection connection */
	edges?:(ModelTypes["RootQueryToMovieConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Movie"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToMovieConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Movie"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PageIdType"]: GraphQLTypes["PageIdType"];
	/** Arguments for filtering the RootQueryToPageConnection connection */
["RootQueryToPageConnectionWhereArgs"]: GraphQLTypes["RootQueryToPageConnectionWhereArgs"];
	/** Connection between the RootQuery type and the page type */
["RootQueryToPageConnection"]: {
		/** Edges for the RootQueryToPageConnection connection */
	edges?:(ModelTypes["RootQueryToPageConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Page"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToPageConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Page"]
};
	/** An plugin object */
["Plugin"]: {
		/** Name of the plugin author(s), may also be a company name. */
	author?:string,
	/** URI for the related author(s)/company website. */
	authorUri?:string,
	/** Description of the plugin. */
	description?:string,
	/** The globally unique identifier of the plugin object. */
	id:string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Display name of the plugin. */
	name?:string,
	/** Plugin path. */
	path?:string,
	/** URI for the plugin website. This is useful for directing users for support requests etc. */
	pluginUri?:string,
	/** Current version of the plugin. */
	version?:string
};
	/** Connection between the RootQuery type and the Plugin type */
["RootQueryToPluginConnection"]: {
		/** Edges for the RootQueryToPluginConnection connection */
	edges?:(ModelTypes["RootQueryToPluginConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Plugin"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToPluginConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Plugin"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PostIdType"]: GraphQLTypes["PostIdType"];
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PostFormatIdType"]: GraphQLTypes["PostFormatIdType"];
	/** Arguments for filtering the RootQueryToPostFormatConnection connection */
["RootQueryToPostFormatConnectionWhereArgs"]: GraphQLTypes["RootQueryToPostFormatConnectionWhereArgs"];
	/** Connection between the RootQuery type and the postFormat type */
["RootQueryToPostFormatConnection"]: {
		/** Edges for the RootQueryToPostFormatConnection connection */
	edges?:(ModelTypes["RootQueryToPostFormatConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["PostFormat"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToPostFormatConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["PostFormat"]
};
	/** Arguments for filtering the RootQueryToPostConnection connection */
["RootQueryToPostConnectionWhereArgs"]: GraphQLTypes["RootQueryToPostConnectionWhereArgs"];
	/** Connection between the RootQuery type and the post type */
["RootQueryToPostConnection"]: {
		/** Edges for the RootQueryToPostConnection connection */
	edges?:(ModelTypes["RootQueryToPostConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Post"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToPostConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Post"]
};
	/** The reading setting type */
["ReadingSettings"]: {
		/** Blog pages show at most. */
	postsPerPage?:number
};
	/** Connection between the RootQuery type and the EnqueuedScript type */
["RootQueryToEnqueuedScriptConnection"]: {
		/** Edges for the RootQueryToEnqueuedScriptConnection connection */
	edges?:(ModelTypes["RootQueryToEnqueuedScriptConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["EnqueuedScript"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToEnqueuedScriptConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["EnqueuedScript"]
};
	/** Connection between the RootQuery type and the EnqueuedStylesheet type */
["RootQueryToEnqueuedStylesheetConnection"]: {
		/** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
	edges?:(ModelTypes["RootQueryToEnqueuedStylesheetConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["EnqueuedStylesheet"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToEnqueuedStylesheetConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["EnqueuedStylesheet"]
};
	/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
["RootQueryToContentRevisionUnionConnectionWhereArgs"]: GraphQLTypes["RootQueryToContentRevisionUnionConnectionWhereArgs"];
	/** Connection between the RootQuery type and the ContentRevisionUnion type */
["RootQueryToContentRevisionUnionConnection"]: {
		/** Edges for the RootQueryToContentRevisionUnionConnection connection */
	edges?:(ModelTypes["RootQueryToContentRevisionUnionConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["ContentRevisionUnion"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToContentRevisionUnionConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["ContentRevisionUnion"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["TagIdType"]: GraphQLTypes["TagIdType"];
	/** Arguments for filtering the RootQueryToTagConnection connection */
["RootQueryToTagConnectionWhereArgs"]: GraphQLTypes["RootQueryToTagConnectionWhereArgs"];
	/** Connection between the RootQuery type and the tag type */
["RootQueryToTagConnection"]: {
		/** Edges for the RootQueryToTagConnection connection */
	edges?:(ModelTypes["RootQueryToTagConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Tag"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToTagConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Tag"]
};
	/** Connection between the RootQuery type and the Taxonomy type */
["RootQueryToTaxonomyConnection"]: {
		/** Edges for the RootQueryToTaxonomyConnection connection */
	edges?:(ModelTypes["RootQueryToTaxonomyConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Taxonomy"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToTaxonomyConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Taxonomy"]
};
	/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
["TaxonomyIdTypeEnum"]: GraphQLTypes["TaxonomyIdTypeEnum"];
	/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
["TermNodeIdTypeEnum"]: GraphQLTypes["TermNodeIdTypeEnum"];
	/** Arguments for filtering the RootQueryToTermNodeConnection connection */
["RootQueryToTermNodeConnectionWhereArgs"]: GraphQLTypes["RootQueryToTermNodeConnectionWhereArgs"];
	/** Connection between the RootQuery type and the TermNode type */
["RootQueryToTermNodeConnection"]: {
		/** Edges for the RootQueryToTermNodeConnection connection */
	edges?:(ModelTypes["RootQueryToTermNodeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["TermNode"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToTermNodeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["TermNode"]
};
	/** A theme object */
["Theme"]: {
		/** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
	author?:string,
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
	authorUri?:string,
	/** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
	description?:string,
	/** The globally unique identifier of the theme object. */
	id:string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
	name?:string,
	/** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
	screenshot?:string,
	/** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
	slug?:string,
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
	tags?:(string | undefined)[],
	/** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
	themeUri?:string,
	/** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
	version?:string
};
	/** Connection between the RootQuery type and the Theme type */
["RootQueryToThemeConnection"]: {
		/** Edges for the RootQueryToThemeConnection connection */
	edges?:(ModelTypes["RootQueryToThemeConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["Theme"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToThemeConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["Theme"]
};
	/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
["UserNodeIdTypeEnum"]: GraphQLTypes["UserNodeIdTypeEnum"];
	/** Connection between the RootQuery type and the UserRole type */
["RootQueryToUserRoleConnection"]: {
		/** Edges for the RootQueryToUserRoleConnection connection */
	edges?:(ModelTypes["RootQueryToUserRoleConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["UserRole"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToUserRoleConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["UserRole"]
};
	/** Arguments for filtering the RootQueryToUserConnection connection */
["RootQueryToUserConnectionWhereArgs"]: GraphQLTypes["RootQueryToUserConnectionWhereArgs"];
	/** Options for ordering the connection */
["UsersConnectionOrderbyInput"]: GraphQLTypes["UsersConnectionOrderbyInput"];
	/** Field to order the connection by */
["UsersConnectionOrderbyEnum"]: GraphQLTypes["UsersConnectionOrderbyEnum"];
	/** Names of available user roles */
["UserRoleEnum"]: GraphQLTypes["UserRoleEnum"];
	/** Column used for searching for users. */
["UsersConnectionSearchColumnEnum"]: GraphQLTypes["UsersConnectionSearchColumnEnum"];
	/** Connection between the RootQuery type and the User type */
["RootQueryToUserConnection"]: {
		/** Edges for the RootQueryToUserConnection connection */
	edges?:(ModelTypes["RootQueryToUserConnectionEdge"] | undefined)[],
	/** The nodes of the connection, without the edges */
	nodes?:(ModelTypes["User"] | undefined)[],
	/** Information about pagination in a connection. */
	pageInfo?:ModelTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToUserConnectionEdge"]: {
		/** A cursor for use in pagination */
	cursor?:string,
	/** The item at the end of the edge */
	node?:ModelTypes["User"]
};
	/** The writing setting type */
["WritingSettings"]: {
		/** Default post category. */
	defaultCategory?:number,
	/** Default post format. */
	defaultPostFormat?:string,
	/** Convert emoticons like :-) and :-P to graphics on display. */
	useSmilies?:boolean
};
	/** The root mutation */
["RootMutation"]: {
		/** The payload for the createBadge mutation */
	createBadge?:ModelTypes["CreateBadgePayload"],
	/** The payload for the createCategory mutation */
	createCategory?:ModelTypes["CreateCategoryPayload"],
	/** The payload for the createComment mutation */
	createComment?:ModelTypes["CreateCommentPayload"],
	/** The payload for the createHero mutation */
	createHero?:ModelTypes["CreateHeroPayload"],
	/** The payload for the createMediaItem mutation */
	createMediaItem?:ModelTypes["CreateMediaItemPayload"],
	/** The payload for the createMovie mutation */
	createMovie?:ModelTypes["CreateMoviePayload"],
	/** The payload for the createPage mutation */
	createPage?:ModelTypes["CreatePagePayload"],
	/** The payload for the createPost mutation */
	createPost?:ModelTypes["CreatePostPayload"],
	/** The payload for the createPostFormat mutation */
	createPostFormat?:ModelTypes["CreatePostFormatPayload"],
	/** The payload for the createTag mutation */
	createTag?:ModelTypes["CreateTagPayload"],
	/** The payload for the createUser mutation */
	createUser?:ModelTypes["CreateUserPayload"],
	/** The payload for the deleteBadge mutation */
	deleteBadge?:ModelTypes["DeleteBadgePayload"],
	/** The payload for the deleteCategory mutation */
	deleteCategory?:ModelTypes["DeleteCategoryPayload"],
	/** The payload for the deleteComment mutation */
	deleteComment?:ModelTypes["DeleteCommentPayload"],
	/** The payload for the deleteHero mutation */
	deleteHero?:ModelTypes["DeleteHeroPayload"],
	/** The payload for the deleteMediaItem mutation */
	deleteMediaItem?:ModelTypes["DeleteMediaItemPayload"],
	/** The payload for the deleteMovie mutation */
	deleteMovie?:ModelTypes["DeleteMoviePayload"],
	/** The payload for the deletePage mutation */
	deletePage?:ModelTypes["DeletePagePayload"],
	/** The payload for the deletePost mutation */
	deletePost?:ModelTypes["DeletePostPayload"],
	/** The payload for the deletePostFormat mutation */
	deletePostFormat?:ModelTypes["DeletePostFormatPayload"],
	/** The payload for the deleteTag mutation */
	deleteTag?:ModelTypes["DeleteTagPayload"],
	/** The payload for the deleteUser mutation */
	deleteUser?:ModelTypes["DeleteUserPayload"],
	/** The payload for the generateAuthorizationCode mutation */
	generateAuthorizationCode?:ModelTypes["GenerateAuthorizationCodePayload"],
	/** Increase the count. */
	increaseCount?:number,
	/** The payload for the registerUser mutation */
	registerUser?:ModelTypes["RegisterUserPayload"],
	/** The payload for the resetUserPassword mutation */
	resetUserPassword?:ModelTypes["ResetUserPasswordPayload"],
	/** The payload for the restoreComment mutation */
	restoreComment?:ModelTypes["RestoreCommentPayload"],
	/** The payload for the sendPasswordResetEmail mutation */
	sendPasswordResetEmail?:ModelTypes["SendPasswordResetEmailPayload"],
	/** The payload for the updateBadge mutation */
	updateBadge?:ModelTypes["UpdateBadgePayload"],
	/** The payload for the UpdateCategory mutation */
	updateCategory?:ModelTypes["UpdateCategoryPayload"],
	/** The payload for the updateComment mutation */
	updateComment?:ModelTypes["UpdateCommentPayload"],
	/** The payload for the updateHero mutation */
	updateHero?:ModelTypes["UpdateHeroPayload"],
	/** The payload for the updateMediaItem mutation */
	updateMediaItem?:ModelTypes["UpdateMediaItemPayload"],
	/** The payload for the updateMovie mutation */
	updateMovie?:ModelTypes["UpdateMoviePayload"],
	/** The payload for the updatePage mutation */
	updatePage?:ModelTypes["UpdatePagePayload"],
	/** The payload for the updatePost mutation */
	updatePost?:ModelTypes["UpdatePostPayload"],
	/** The payload for the UpdatePostFormat mutation */
	updatePostFormat?:ModelTypes["UpdatePostFormatPayload"],
	/** The payload for the updateSettings mutation */
	updateSettings?:ModelTypes["UpdateSettingsPayload"],
	/** The payload for the UpdateTag mutation */
	updateTag?:ModelTypes["UpdateTagPayload"],
	/** The payload for the updateUser mutation */
	updateUser?:ModelTypes["UpdateUserPayload"]
};
	/** Input for the createBadge mutation */
["CreateBadgeInput"]: GraphQLTypes["CreateBadgeInput"];
	/** The payload for the createBadge mutation */
["CreateBadgePayload"]: {
		/** The Post object mutation type. */
	badge?:ModelTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string
};
	/** Input for the createCategory mutation */
["CreateCategoryInput"]: GraphQLTypes["CreateCategoryInput"];
	/** The payload for the createCategory mutation */
["CreateCategoryPayload"]: {
		/** The created category */
	category?:ModelTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string
};
	/** Input for the createComment mutation */
["CreateCommentInput"]: GraphQLTypes["CreateCommentInput"];
	/** The payload for the createComment mutation */
["CreateCommentPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The comment that was created */
	comment?:ModelTypes["Comment"],
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?:boolean
};
	/** Input for the createHero mutation */
["CreateHeroInput"]: GraphQLTypes["CreateHeroInput"];
	/** The payload for the createHero mutation */
["CreateHeroPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The Post object mutation type. */
	hero?:ModelTypes["Hero"]
};
	/** Input for the createMediaItem mutation */
["CreateMediaItemInput"]: GraphQLTypes["CreateMediaItemInput"];
	/** The status of the media item object. */
["MediaItemStatusEnum"]: GraphQLTypes["MediaItemStatusEnum"];
	/** The payload for the createMediaItem mutation */
["CreateMediaItemPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The MediaItem object mutation type. */
	mediaItem?:ModelTypes["MediaItem"]
};
	/** Input for the createMovie mutation */
["CreateMovieInput"]: GraphQLTypes["CreateMovieInput"];
	/** The payload for the createMovie mutation */
["CreateMoviePayload"]: {
		/** The Post object mutation type. */
	movie?:ModelTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string
};
	/** Input for the createPage mutation */
["CreatePageInput"]: GraphQLTypes["CreatePageInput"];
	/** The payload for the createPage mutation */
["CreatePagePayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The Post object mutation type. */
	page?:ModelTypes["Page"]
};
	/** Input for the createPost mutation */
["CreatePostInput"]: GraphQLTypes["CreatePostInput"];
	/** Set relationships between the post to categories */
["PostCategoriesInput"]: GraphQLTypes["PostCategoriesInput"];
	/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostCategoriesNodeInput"]: GraphQLTypes["PostCategoriesNodeInput"];
	/** Set relationships between the post to postFormats */
["PostPostFormatsInput"]: GraphQLTypes["PostPostFormatsInput"];
	/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostPostFormatsNodeInput"]: GraphQLTypes["PostPostFormatsNodeInput"];
	/** Set relationships between the post to tags */
["PostTagsInput"]: GraphQLTypes["PostTagsInput"];
	/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostTagsNodeInput"]: GraphQLTypes["PostTagsNodeInput"];
	/** The payload for the createPost mutation */
["CreatePostPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The Post object mutation type. */
	post?:ModelTypes["Post"]
};
	/** Input for the createPostFormat mutation */
["CreatePostFormatInput"]: GraphQLTypes["CreatePostFormatInput"];
	/** The payload for the createPostFormat mutation */
["CreatePostFormatPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The created post_format */
	postFormat?:ModelTypes["PostFormat"]
};
	/** Input for the createTag mutation */
["CreateTagInput"]: GraphQLTypes["CreateTagInput"];
	/** The payload for the createTag mutation */
["CreateTagPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The created post_tag */
	tag?:ModelTypes["Tag"]
};
	/** Input for the createUser mutation */
["CreateUserInput"]: GraphQLTypes["CreateUserInput"];
	/** The payload for the createUser mutation */
["CreateUserPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The User object mutation type. */
	user?:ModelTypes["User"]
};
	/** Input for the deleteBadge mutation */
["DeleteBadgeInput"]: GraphQLTypes["DeleteBadgeInput"];
	/** The payload for the deleteBadge mutation */
["DeleteBadgePayload"]: {
		/** The object before it was deleted */
	badge?:ModelTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted object */
	deletedId?:string
};
	/** Input for the deleteCategory mutation */
["DeleteCategoryInput"]: GraphQLTypes["DeleteCategoryInput"];
	/** The payload for the deleteCategory mutation */
["DeleteCategoryPayload"]: {
		/** The deteted term object */
	category?:ModelTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted object */
	deletedId?:string
};
	/** Input for the deleteComment mutation */
["DeleteCommentInput"]: GraphQLTypes["DeleteCommentInput"];
	/** The payload for the deleteComment mutation */
["DeleteCommentPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The deleted comment object */
	comment?:ModelTypes["Comment"],
	/** The deleted comment ID */
	deletedId?:string
};
	/** Input for the deleteHero mutation */
["DeleteHeroInput"]: GraphQLTypes["DeleteHeroInput"];
	/** The payload for the deleteHero mutation */
["DeleteHeroPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted object */
	deletedId?:string,
	/** The object before it was deleted */
	hero?:ModelTypes["Hero"]
};
	/** Input for the deleteMediaItem mutation */
["DeleteMediaItemInput"]: GraphQLTypes["DeleteMediaItemInput"];
	/** The payload for the deleteMediaItem mutation */
["DeleteMediaItemPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted mediaItem */
	deletedId?:string,
	/** The mediaItem before it was deleted */
	mediaItem?:ModelTypes["MediaItem"]
};
	/** Input for the deleteMovie mutation */
["DeleteMovieInput"]: GraphQLTypes["DeleteMovieInput"];
	/** The payload for the deleteMovie mutation */
["DeleteMoviePayload"]: {
		/** The object before it was deleted */
	movie?:ModelTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted object */
	deletedId?:string
};
	/** Input for the deletePage mutation */
["DeletePageInput"]: GraphQLTypes["DeletePageInput"];
	/** The payload for the deletePage mutation */
["DeletePagePayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted object */
	deletedId?:string,
	/** The object before it was deleted */
	page?:ModelTypes["Page"]
};
	/** Input for the deletePost mutation */
["DeletePostInput"]: GraphQLTypes["DeletePostInput"];
	/** The payload for the deletePost mutation */
["DeletePostPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted object */
	deletedId?:string,
	/** The object before it was deleted */
	post?:ModelTypes["Post"]
};
	/** Input for the deletePostFormat mutation */
["DeletePostFormatInput"]: GraphQLTypes["DeletePostFormatInput"];
	/** The payload for the deletePostFormat mutation */
["DeletePostFormatPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted object */
	deletedId?:string,
	/** The deteted term object */
	postFormat?:ModelTypes["PostFormat"]
};
	/** Input for the deleteTag mutation */
["DeleteTagInput"]: GraphQLTypes["DeleteTagInput"];
	/** The payload for the deleteTag mutation */
["DeleteTagPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the deleted object */
	deletedId?:string,
	/** The deteted term object */
	tag?:ModelTypes["Tag"]
};
	/** Input for the deleteUser mutation */
["DeleteUserInput"]: GraphQLTypes["DeleteUserInput"];
	/** The payload for the deleteUser mutation */
["DeleteUserPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The ID of the user that you just deleted */
	deletedId?:string,
	/** The deleted user object */
	user?:ModelTypes["User"]
};
	/** Input for the generateAuthorizationCode mutation */
["GenerateAuthorizationCodeInput"]: GraphQLTypes["GenerateAuthorizationCodeInput"];
	/** The payload for the generateAuthorizationCode mutation */
["GenerateAuthorizationCodePayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** Authorization code used for requesting refresh/access tokens */
	code?:string,
	/** Error encountered during user authentication, if any */
	error?:string
};
	/** Input for the registerUser mutation */
["RegisterUserInput"]: GraphQLTypes["RegisterUserInput"];
	/** The payload for the registerUser mutation */
["RegisterUserPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The User object mutation type. */
	user?:ModelTypes["User"]
};
	/** Input for the resetUserPassword mutation */
["ResetUserPasswordInput"]: GraphQLTypes["ResetUserPasswordInput"];
	/** The payload for the resetUserPassword mutation */
["ResetUserPasswordPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The User object mutation type. */
	user?:ModelTypes["User"]
};
	/** Input for the restoreComment mutation */
["RestoreCommentInput"]: GraphQLTypes["RestoreCommentInput"];
	/** The payload for the restoreComment mutation */
["RestoreCommentPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The restored comment object */
	comment?:ModelTypes["Comment"],
	/** The ID of the restored comment */
	restoredId?:string
};
	/** Input for the sendPasswordResetEmail mutation */
["SendPasswordResetEmailInput"]: GraphQLTypes["SendPasswordResetEmailInput"];
	/** The payload for the sendPasswordResetEmail mutation */
["SendPasswordResetEmailPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The user that the password reset email was sent to */
	user?:ModelTypes["User"]
};
	/** Input for the updateBadge mutation */
["UpdateBadgeInput"]: GraphQLTypes["UpdateBadgeInput"];
	/** The payload for the updateBadge mutation */
["UpdateBadgePayload"]: {
		/** The Post object mutation type. */
	badge?:ModelTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string
};
	/** Input for the UpdateCategory mutation */
["UpdateCategoryInput"]: GraphQLTypes["UpdateCategoryInput"];
	/** The payload for the UpdateCategory mutation */
["UpdateCategoryPayload"]: {
		/** The created category */
	category?:ModelTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string
};
	/** Input for the updateComment mutation */
["UpdateCommentInput"]: GraphQLTypes["UpdateCommentInput"];
	/** The payload for the updateComment mutation */
["UpdateCommentPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The comment that was created */
	comment?:ModelTypes["Comment"],
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?:boolean
};
	/** Input for the updateHero mutation */
["UpdateHeroInput"]: GraphQLTypes["UpdateHeroInput"];
	/** The payload for the updateHero mutation */
["UpdateHeroPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The Post object mutation type. */
	hero?:ModelTypes["Hero"]
};
	/** Input for the updateMediaItem mutation */
["UpdateMediaItemInput"]: GraphQLTypes["UpdateMediaItemInput"];
	/** The payload for the updateMediaItem mutation */
["UpdateMediaItemPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The MediaItem object mutation type. */
	mediaItem?:ModelTypes["MediaItem"]
};
	/** Input for the updateMovie mutation */
["UpdateMovieInput"]: GraphQLTypes["UpdateMovieInput"];
	/** The payload for the updateMovie mutation */
["UpdateMoviePayload"]: {
		/** The Post object mutation type. */
	movie?:ModelTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string
};
	/** Input for the updatePage mutation */
["UpdatePageInput"]: GraphQLTypes["UpdatePageInput"];
	/** The payload for the updatePage mutation */
["UpdatePagePayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The Post object mutation type. */
	page?:ModelTypes["Page"]
};
	/** Input for the updatePost mutation */
["UpdatePostInput"]: GraphQLTypes["UpdatePostInput"];
	/** The payload for the updatePost mutation */
["UpdatePostPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The Post object mutation type. */
	post?:ModelTypes["Post"]
};
	/** Input for the UpdatePostFormat mutation */
["UpdatePostFormatInput"]: GraphQLTypes["UpdatePostFormatInput"];
	/** The payload for the UpdatePostFormat mutation */
["UpdatePostFormatPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The created post_format */
	postFormat?:ModelTypes["PostFormat"]
};
	/** Input for the updateSettings mutation */
["UpdateSettingsInput"]: GraphQLTypes["UpdateSettingsInput"];
	/** The payload for the updateSettings mutation */
["UpdateSettingsPayload"]: {
		/** Update all settings. */
	allSettings?:ModelTypes["Settings"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** Update the discussion setting. */
	discussionSettings?:ModelTypes["DiscussionSettings"],
	/** Update the general setting. */
	generalSettings?:ModelTypes["GeneralSettings"],
	/** Update the reading setting. */
	readingSettings?:ModelTypes["ReadingSettings"],
	/** Update the writing setting. */
	writingSettings?:ModelTypes["WritingSettings"]
};
	/** Input for the UpdateTag mutation */
["UpdateTagInput"]: GraphQLTypes["UpdateTagInput"];
	/** The payload for the UpdateTag mutation */
["UpdateTagPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The created post_tag */
	tag?:ModelTypes["Tag"]
};
	/** Input for the updateUser mutation */
["UpdateUserInput"]: GraphQLTypes["UpdateUserInput"];
	/** The payload for the updateUser mutation */
["UpdateUserPayload"]: {
		/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?:string,
	/** The User object mutation type. */
	user?:ModelTypes["User"]
};
	/** A Comment Author object */
["CommentAuthor"]: {
		/** Identifies the primary key from the database. */
	databaseId:number,
	/** The email for the comment author */
	email?:string,
	/** The globally unique identifier for the comment author object */
	id:string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?:boolean,
	/** The name for the comment author. */
	name?:string,
	/** The url the comment author. */
	url?:string
};
	/** The template assigned to the node */
["DefaultTemplate"]: {
		/** The name of the template */
	templateName?:string
};
	/** The template assigned to the node */
["CoverTemplate"]: {
		/** The name of the template */
	templateName?:string
};
	/** The template assigned to the node */
["FullWidthTemplate"]: {
		/** The name of the template */
	templateName?:string
}
    }

export type GraphQLTypes = {
    /** The root entry point into the Graph */
["RootQuery"]: {
	__typename: "RootQuery",
	/** Entry point to get all settings for the site */
	allSettings?: GraphQLTypes["Settings"],
	/** An object of the badge Type.  */
	badge?: GraphQLTypes["Badge"],
	/** A badge object */
	badgeBy?: GraphQLTypes["Badge"],
	/** Connection between the RootQuery type and the badge type */
	badges?: GraphQLTypes["RootQueryToBadgeConnection"],
	/** Connection between the RootQuery type and the category type */
	categories?: GraphQLTypes["RootQueryToCategoryConnection"],
	/** A 0bject */
	category?: GraphQLTypes["Category"],
	/** Returns a Comment */
	comment?: GraphQLTypes["Comment"],
	/** Connection between the RootQuery type and the Comment type */
	comments?: GraphQLTypes["RootQueryToCommentConnection"],
	/** A node used to manage content */
	contentNode?: GraphQLTypes["ContentNode"],
	/** Connection between the RootQuery type and the ContentNode type */
	contentNodes?: GraphQLTypes["RootQueryToContentNodeConnection"],
	/** Fetch a Content Type node by unique Identifier */
	contentType?: GraphQLTypes["ContentType"],
	/** Connection between the RootQuery type and the ContentType type */
	contentTypes?: GraphQLTypes["RootQueryToContentTypeConnection"],
	/** Fields of the &#039;DiscussionSettings&#039; settings group */
	discussionSettings?: GraphQLTypes["DiscussionSettings"],
	/** Fields of the &#039;GeneralSettings&#039; settings group */
	generalSettings?: GraphQLTypes["GeneralSettings"],
	/** An object of the hero Type.  */
	hero?: GraphQLTypes["Hero"],
	/** A hero object */
	heroBy?: GraphQLTypes["Hero"],
	/** Connection between the RootQuery type and the hero type */
	heroes?: GraphQLTypes["RootQueryToHeroConnection"],
	/** An object of the mediaItem Type.  */
	mediaItem?: GraphQLTypes["MediaItem"],
	/** A mediaItem object */
	mediaItemBy?: GraphQLTypes["MediaItem"],
	/** Connection between the RootQuery type and the mediaItem type */
	mediaItems?: GraphQLTypes["RootQueryToMediaItemConnection"],
	/** A WordPress navigation menu */
	menu?: GraphQLTypes["Menu"],
	/** A WordPress navigation menu item */
	menuItem?: GraphQLTypes["MenuItem"],
	/** Connection between the RootQuery type and the MenuItem type */
	menuItems?: GraphQLTypes["RootQueryToMenuItemConnection"],
	/** Connection between the RootQuery type and the Menu type */
	menus?: GraphQLTypes["RootQueryToMenuConnection"],
	/** An object of the Movie Type.  */
	movie?: GraphQLTypes["Movie"],
	/** A Movie object */
	movieBy?: GraphQLTypes["Movie"],
	/** Connection between the RootQuery type and the Movie type */
	movies?: GraphQLTypes["RootQueryToMovieConnection"],
	/** Fetches an object given its ID */
	node?: GraphQLTypes["Node"],
	/** Fetches an object given its Unique Resource Identifier */
	nodeByUri?: GraphQLTypes["UniformResourceIdentifiable"],
	/** An object of the page Type.  */
	page?: GraphQLTypes["Page"],
	/** A page object */
	pageBy?: GraphQLTypes["Page"],
	/** Connection between the RootQuery type and the page type */
	pages?: GraphQLTypes["RootQueryToPageConnection"],
	/** A WordPress plugin */
	plugin?: GraphQLTypes["Plugin"],
	/** Connection between the RootQuery type and the Plugin type */
	plugins?: GraphQLTypes["RootQueryToPluginConnection"],
	/** An object of the post Type.  */
	post?: GraphQLTypes["Post"],
	/** A post object */
	postBy?: GraphQLTypes["Post"],
	/** A 0bject */
	postFormat?: GraphQLTypes["PostFormat"],
	/** Connection between the RootQuery type and the postFormat type */
	postFormats?: GraphQLTypes["RootQueryToPostFormatConnection"],
	/** Connection between the RootQuery type and the post type */
	posts?: GraphQLTypes["RootQueryToPostConnection"],
	/** Fields of the &#039;ReadingSettings&#039; settings group */
	readingSettings?: GraphQLTypes["ReadingSettings"],
	/** Connection between the RootQuery type and the EnqueuedScript type */
	registeredScripts?: GraphQLTypes["RootQueryToEnqueuedScriptConnection"],
	/** Connection between the RootQuery type and the EnqueuedStylesheet type */
	registeredStylesheets?: GraphQLTypes["RootQueryToEnqueuedStylesheetConnection"],
	/** Connection between the RootQuery type and the ContentRevisionUnion type */
	revisions?: GraphQLTypes["RootQueryToContentRevisionUnionConnection"],
	/** A 0bject */
	tag?: GraphQLTypes["Tag"],
	/** Connection between the RootQuery type and the tag type */
	tags?: GraphQLTypes["RootQueryToTagConnection"],
	/** Connection between the RootQuery type and the Taxonomy type */
	taxonomies?: GraphQLTypes["RootQueryToTaxonomyConnection"],
	/** Fetch a Taxonomy node by unique Identifier */
	taxonomy?: GraphQLTypes["Taxonomy"],
	/** A node in a taxonomy used to group and relate content nodes */
	termNode?: GraphQLTypes["TermNode"],
	/** Connection between the RootQuery type and the TermNode type */
	terms?: GraphQLTypes["RootQueryToTermNodeConnection"],
	/** A Theme object */
	theme?: GraphQLTypes["Theme"],
	/** Connection between the RootQuery type and the Theme type */
	themes?: GraphQLTypes["RootQueryToThemeConnection"],
	/** Returns a user */
	user?: GraphQLTypes["User"],
	/** Returns a user role */
	userRole?: GraphQLTypes["UserRole"],
	/** Connection between the RootQuery type and the UserRole type */
	userRoles?: GraphQLTypes["RootQueryToUserRoleConnection"],
	/** Connection between the RootQuery type and the User type */
	users?: GraphQLTypes["RootQueryToUserConnection"],
	/** Returns the current user */
	viewer?: GraphQLTypes["User"],
	/** Fields of the &#039;WritingSettings&#039; settings group */
	writingSettings?: GraphQLTypes["WritingSettings"]
};
	/** All of the registered settings */
["Settings"]: {
	__typename: "Settings",
	/** Settings of the the string Settings Group */
	discussionSettingsDefaultCommentStatus?: string,
	/** Settings of the the string Settings Group */
	discussionSettingsDefaultPingStatus?: string,
	/** Settings of the the string Settings Group */
	generalSettingsDateFormat?: string,
	/** Settings of the the string Settings Group */
	generalSettingsDescription?: string,
	/** Settings of the the string Settings Group */
	generalSettingsEmail?: string,
	/** Settings of the the string Settings Group */
	generalSettingsLanguage?: string,
	/** Settings of the the integer Settings Group */
	generalSettingsStartOfWeek?: number,
	/** Settings of the the string Settings Group */
	generalSettingsTimeFormat?: string,
	/** Settings of the the string Settings Group */
	generalSettingsTimezone?: string,
	/** Settings of the the string Settings Group */
	generalSettingsTitle?: string,
	/** Settings of the the string Settings Group */
	generalSettingsUrl?: string,
	/** Settings of the the integer Settings Group */
	readingSettingsPostsPerPage?: number,
	/** Settings of the the integer Settings Group */
	writingSettingsDefaultCategory?: number,
	/** Settings of the the string Settings Group */
	writingSettingsDefaultPostFormat?: string,
	/** Settings of the the boolean Settings Group */
	writingSettingsUseSmilies?: boolean
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["BadgeIdType"]: BadgeIdType;
	/** The badge type */
["Badge"]: {
	__typename: "Badge",
	/** Connection between the NodeWithAuthor type and the User type */
	author?: GraphQLTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?: number,
	/** The globally unique identifier of the author of the node */
	authorId?: string,
	/** The id field matches the WP_Post-&gt;ID field. */
	badgeId: number,
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: GraphQLTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId: number,
	/** Post publishing date. */
	date?: string,
	/** The publishing date set in GMT. */
	dateGmt?: string,
	description?: string,
	/** The desired slug of the post */
	desiredSlug?: string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: GraphQLTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?: string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: string,
	/** Connection between the badge type and the hero type */
	heroes?: GraphQLTypes["BadgeToHeroConnection"],
	/** The globally unique identifier of the badge object. */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is a node in the preview state */
	isPreview?: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The user that most recently edited the node */
	lastEditedBy?: GraphQLTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?: string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: string,
	name?: string,
	/** Connection between the badge type and the badge type */
	preview?: GraphQLTypes["BadgeToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?: number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?: string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: string,
	/** The current status of the object */
	status?: string,
	/** The template assigned to the node */
	template?: GraphQLTypes["ContentTemplate"],
	templates?: Array<string | undefined>,
	tier?: Array<string | undefined>,
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: string,
	/** The unique resource identifier path */
	uri?: string
};
	/** An object with an ID */
["Node"]: {
	__typename:"Badge" | "ContentNode" | "ContentType" | "Taxonomy" | "User" | "Comment" | "EnqueuedScript" | "EnqueuedStylesheet" | "Hero" | "MediaItem" | "Page" | "NodeWithFeaturedImage" | "Post" | "Category" | "TermNode" | "PostFormat" | "Tag" | "UserRole" | "Menu" | "MenuItem" | "Movie" | "Plugin" | "Theme" | "CommentAuthor",
	/** The globally unique ID for the object */
	id: string
	['...on Badge']: '__union' & GraphQLTypes["Badge"];
	['...on ContentNode']: '__union' & GraphQLTypes["ContentNode"];
	['...on ContentType']: '__union' & GraphQLTypes["ContentType"];
	['...on Taxonomy']: '__union' & GraphQLTypes["Taxonomy"];
	['...on User']: '__union' & GraphQLTypes["User"];
	['...on Comment']: '__union' & GraphQLTypes["Comment"];
	['...on EnqueuedScript']: '__union' & GraphQLTypes["EnqueuedScript"];
	['...on EnqueuedStylesheet']: '__union' & GraphQLTypes["EnqueuedStylesheet"];
	['...on Hero']: '__union' & GraphQLTypes["Hero"];
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on NodeWithFeaturedImage']: '__union' & GraphQLTypes["NodeWithFeaturedImage"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on TermNode']: '__union' & GraphQLTypes["TermNode"];
	['...on PostFormat']: '__union' & GraphQLTypes["PostFormat"];
	['...on Tag']: '__union' & GraphQLTypes["Tag"];
	['...on UserRole']: '__union' & GraphQLTypes["UserRole"];
	['...on Menu']: '__union' & GraphQLTypes["Menu"];
	['...on MenuItem']: '__union' & GraphQLTypes["MenuItem"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
	['...on Plugin']: '__union' & GraphQLTypes["Plugin"];
	['...on Theme']: '__union' & GraphQLTypes["Theme"];
	['...on CommentAuthor']: '__union' & GraphQLTypes["CommentAuthor"];
};
	/** Nodes used to manage content */
["ContentNode"]: {
	__typename:"Badge" | "Hero" | "MediaItem" | "Page" | "NodeWithFeaturedImage" | "Post" | "Movie",
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: GraphQLTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The ID of the node in the database. */
	databaseId: number,
	/** Post publishing date. */
	date?: string,
	/** The publishing date set in GMT. */
	dateGmt?: string,
	/** The desired slug of the post */
	desiredSlug?: string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: GraphQLTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?: string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: string,
	/** The unique resource identifier path */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is a node in the preview state */
	isPreview?: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The user that most recently edited the node */
	lastEditedBy?: GraphQLTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?: string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: string,
	/** The database id of the preview node */
	previewRevisionDatabaseId?: number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?: string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: string,
	/** The current status of the object */
	status?: string,
	/** The template assigned to a node of content */
	template?: GraphQLTypes["ContentTemplate"],
	templates?: Array<string | undefined>,
	/** The unique resource identifier path */
	uri?: string
	['...on Badge']: '__union' & GraphQLTypes["Badge"];
	['...on Hero']: '__union' & GraphQLTypes["Hero"];
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on NodeWithFeaturedImage']: '__union' & GraphQLTypes["NodeWithFeaturedImage"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
};
	/** Any node that has a URI */
["UniformResourceIdentifiable"]: {
	__typename:"Badge" | "ContentNode" | "ContentType" | "User" | "Hero" | "MediaItem" | "Page" | "NodeWithFeaturedImage" | "Post" | "Category" | "TermNode" | "PostFormat" | "Tag" | "Movie",
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** The unique resource identifier path */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	templates?: Array<string | undefined>,
	/** The unique resource identifier path */
	uri?: string
	['...on Badge']: '__union' & GraphQLTypes["Badge"];
	['...on ContentNode']: '__union' & GraphQLTypes["ContentNode"];
	['...on ContentType']: '__union' & GraphQLTypes["ContentType"];
	['...on User']: '__union' & GraphQLTypes["User"];
	['...on Hero']: '__union' & GraphQLTypes["Hero"];
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on NodeWithFeaturedImage']: '__union' & GraphQLTypes["NodeWithFeaturedImage"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on TermNode']: '__union' & GraphQLTypes["TermNode"];
	['...on PostFormat']: '__union' & GraphQLTypes["PostFormat"];
	['...on Tag']: '__union' & GraphQLTypes["Tag"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
};
	/** GraphQL representation of WordPress Conditional Tags. */
["ConditionalTags"]: {
	__typename: "ConditionalTags",
	/** Determines whether the query is for an existing archive page. */
	isArchive?: boolean,
	/** Determines whether the query is for an existing attachment page. */
	isAttachment?: boolean,
	/** Determines whether the query is for an existing author archive page. */
	isAuthor?: boolean,
	/** Determines whether the query is for an existing category archive page. */
	isCategory?: boolean,
	/** Determines whether the query is for an existing date archive. */
	isDate?: boolean,
	/** Determines whether the query is for an existing day archive. */
	isDay?: boolean,
	/** Determines whether the query is for the front page of the site. */
	isFrontPage?: boolean,
	/** Determines whether the query is for the blog homepage. */
	isHome?: boolean,
	/** Determines whether the query is for an existing month archive. */
	isMonth?: boolean,
	/** Determines whether this site has more than one author. */
	isMultiAuthor?: boolean,
	/** Determines whether the query is for an existing single page. */
	isPage?: boolean,
	/** Determines whether currently in a page template. */
	isPageTemplate?: boolean,
	/** Determines whether the query is for an existing post type archive page. */
	isPostTypeArchive?: boolean,
	/** Determines whether the query is for a post or page preview. */
	isPreview?: boolean,
	/** Determines whether the query is for the Privacy Policy page. */
	isPrivacyPolicy?: boolean,
	/** Determines whether the query is for a search. */
	isSearch?: boolean,
	/** Determines whether the query is for an existing single post. */
	isSingle?: boolean,
	/** Determines whether the query is for an existing single post of any post type (post, attachment, page, custom post types). */
	isSingular?: boolean,
	/** Determines whether a post is sticky. */
	isSticky?: boolean,
	/** Determines whether the query is for an existing tag archive page. */
	isTag?: boolean,
	/** Determines whether the query is for an existing custom taxonomy archive page. */
	isTax?: boolean,
	/** Determines whether the query is for an existing year archive. */
	isYear?: boolean
};
	/** Connection between the ContentNode type and the ContentType type */
["ContentNodeToContentTypeConnectionEdge"]: {
	__typename: "ContentNodeToContentTypeConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["ContentType"]
};
	/** An Post Type object */
["ContentType"]: {
	__typename: "ContentType",
	/** Whether this content type should can be exported. */
	canExport?: boolean,
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the ContentType type and the Taxonomy type */
	connectedTaxonomies?: GraphQLTypes["ContentTypeToTaxonomyConnection"],
	/** Connection between the ContentType type and the ContentNode type */
	contentNodes?: GraphQLTypes["ContentTypeToContentNodeConnection"],
	/** Whether content of this type should be deleted when the author of it is deleted from the system. */
	deleteWithUser?: boolean,
	/** Description of the content type. */
	description?: string,
	/** Whether to exclude nodes of this content type from front end search results. */
	excludeFromSearch?: boolean,
	/** The plural name of the content type within the GraphQL Schema. */
	graphqlPluralName?: string,
	/** The singular name of the content type within the GraphQL Schema. */
	graphqlSingleName?: string,
	/** Whether this content type should have archives. Content archives are generated by type and by date. */
	hasArchive?: boolean,
	/** Whether the content type is hierarchical, for example pages. */
	hierarchical?: boolean,
	/** The globally unique identifier of the post-type object. */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether this page is set to the static front page. */
	isFrontPage: boolean,
	/** Whether this page is set to the blog posts page. */
	isPostsPage: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** Display name of the content type. */
	label?: string,
	/** Details about the content type labels. */
	labels?: GraphQLTypes["PostTypeLabelDetails"],
	/** The name of the icon file to display as a menu icon. */
	menuIcon?: string,
	/** The position of this post type in the menu. Only applies if show_in_menu is true. */
	menuPosition?: number,
	/** The internal name of the post type. This should not be used for display purposes. */
	name?: string,
	/** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
	public?: boolean,
	/** Whether queries can be performed on the front end for the content type as part of parse_request(). */
	publiclyQueryable?: boolean,
	/** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
	restBase?: string,
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass?: string,
	/** Makes this content type available via the admin bar. */
	showInAdminBar?: boolean,
	/** Whether to add the content type to the GraphQL Schema. */
	showInGraphql?: boolean,
	/** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
	showInMenu?: boolean,
	/** Makes this content type available for selection in navigation menus. */
	showInNavMenus?: boolean,
	/** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
	showInRest?: boolean,
	/** Whether to generate and allow a UI for managing this content type in the admin. */
	showUi?: boolean,
	templates?: Array<string | undefined>,
	/** The unique resource identifier path */
	uri?: string
};
	/** Connection between the ContentType type and the Taxonomy type */
["ContentTypeToTaxonomyConnection"]: {
	__typename: "ContentTypeToTaxonomyConnection",
	/** Edges for the ContentTypeToTaxonomyConnection connection */
	edges?: Array<GraphQLTypes["ContentTypeToTaxonomyConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Taxonomy"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["ContentTypeToTaxonomyConnectionEdge"]: {
	__typename: "ContentTypeToTaxonomyConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Taxonomy"]
};
	/** A taxonomy object */
["Taxonomy"]: {
	__typename: "Taxonomy",
	/** List of Content Types associated with the Taxonomy */
	connectedContentTypes?: GraphQLTypes["TaxonomyToContentTypeConnection"],
	/** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
	description?: string,
	/** The plural name of the post type within the GraphQL Schema. */
	graphqlPluralName?: string,
	/** The singular name of the post type within the GraphQL Schema. */
	graphqlSingleName?: string,
	/** Whether the taxonomy is hierarchical */
	hierarchical?: boolean,
	/** The globally unique identifier of the taxonomy object. */
	id: string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Name of the taxonomy shown in the menu. Usually plural. */
	label?: string,
	/** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
	name?: string,
	/** Whether the taxonomy is publicly queryable */
	public?: boolean,
	/** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
	restBase?: string,
	/** The REST Controller class assigned to handling this content type. */
	restControllerClass?: string,
	/** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
	showCloud?: boolean,
	/** Whether to display a column for the taxonomy on its post type listing screens. */
	showInAdminColumn?: boolean,
	/** Whether to add the post type to the GraphQL Schema. */
	showInGraphql?: boolean,
	/** Whether to show the taxonomy in the admin menu */
	showInMenu?: boolean,
	/** Whether the taxonomy is available for selection in navigation menus. */
	showInNavMenus?: boolean,
	/** Whether to show the taxonomy in the quick/bulk edit panel. */
	showInQuickEdit?: boolean,
	/** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
	showInRest?: boolean,
	/** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
	showUi?: boolean
};
	/** Connection between the Taxonomy type and the ContentType type */
["TaxonomyToContentTypeConnection"]: {
	__typename: "TaxonomyToContentTypeConnection",
	/** Edges for the TaxonomyToContentTypeConnection connection */
	edges?: Array<GraphQLTypes["TaxonomyToContentTypeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentType"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TaxonomyToContentTypeConnectionEdge"]: {
	__typename: "TaxonomyToContentTypeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentType"]
};
	/** Information about pagination in a connection. */
["WPPageInfo"]: {
	__typename: "WPPageInfo",
	/** When paginating forwards, the cursor to continue. */
	endCursor?: string,
	/** When paginating forwards, are there more items? */
	hasNextPage: boolean,
	/** When paginating backwards, are there more items? */
	hasPreviousPage: boolean,
	/** When paginating backwards, the cursor to continue. */
	startCursor?: string
};
	/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
["ContentTypeToContentNodeConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Allowed Content Types */
["ContentTypeEnum"]: ContentTypeEnum;
	/** Filter the connection based on input */
["DateQueryInput"]: {
		/** Nodes should be returned after this date */
	after?: GraphQLTypes["DateInput"],
	/** Nodes should be returned before this date */
	before?: GraphQLTypes["DateInput"],
	/** Column to query against */
	column?: GraphQLTypes["PostObjectsConnectionDateColumnEnum"],
	/** For after/before, whether exact value should be matched or not */
	compare?: string,
	/** Day of the month (from 1 to 31) */
	day?: number,
	/** Hour (from 0 to 23) */
	hour?: number,
	/** For after/before, whether exact value should be matched or not */
	inclusive?: boolean,
	/** Minute (from 0 to 59) */
	minute?: number,
	/** Month number (from 1 to 12) */
	month?: number,
	/** OR or AND, how the sub-arrays should be compared */
	relation?: GraphQLTypes["RelationEnum"],
	/** Second (0 to 59) */
	second?: number,
	/** Week of the year (from 0 to 53) */
	week?: number,
	/** 4 digit year (e.g. 2017) */
	year?: number
};
	/** Date values */
["DateInput"]: {
		/** Day of the month (from 1 to 31) */
	day?: number,
	/** Month number (from 1 to 12) */
	month?: number,
	/** 4 digit year (e.g. 2017) */
	year?: number
};
	/** The column to use when filtering by date */
["PostObjectsConnectionDateColumnEnum"]: PostObjectsConnectionDateColumnEnum;
	/** The logical relation between each item in the array when there are more than one. */
["RelationEnum"]: RelationEnum;
	/** The MimeType of the object */
["MimeTypeEnum"]: MimeTypeEnum;
	/** Options for ordering the connection */
["PostObjectsConnectionOrderbyInput"]: {
		/** The field to order the connection by */
	field: GraphQLTypes["PostObjectsConnectionOrderbyEnum"],
	/** Possible directions in which to order a list of items */
	order: GraphQLTypes["OrderEnum"]
};
	/** Field to order the connection by */
["PostObjectsConnectionOrderbyEnum"]: PostObjectsConnectionOrderbyEnum;
	/** The cardinality of the connection order */
["OrderEnum"]: OrderEnum;
	/** The status of the object. */
["PostStatusEnum"]: PostStatusEnum;
	/** Connection between the ContentType type and the ContentNode type */
["ContentTypeToContentNodeConnection"]: {
	__typename: "ContentTypeToContentNodeConnection",
	/** Edges for the ContentTypeToContentNodeConnection connection */
	edges?: Array<GraphQLTypes["ContentTypeToContentNodeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["ContentTypeToContentNodeConnectionEdge"]: {
	__typename: "ContentTypeToContentNodeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentNode"]
};
	/** Details for labels of the PostType */
["PostTypeLabelDetails"]: {
	__typename: "PostTypeLabelDetails",
	/** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
	addNew?: string,
	/** Label for adding a new singular item. */
	addNewItem?: string,
	/** Label to signify all items in a submenu link. */
	allItems?: string,
	/** Label for archives in nav menus */
	archives?: string,
	/** Label for the attributes meta box. */
	attributes?: string,
	/** Label for editing a singular item. */
	editItem?: string,
	/** Label for the Featured Image meta box title. */
	featuredImage?: string,
	/** Label for the table views hidden heading. */
	filterItemsList?: string,
	/** Label for the media frame button. */
	insertIntoItem?: string,
	/** Label for the table hidden heading. */
	itemsList?: string,
	/** Label for the table pagination hidden heading. */
	itemsListNavigation?: string,
	/** Label for the menu name. */
	menuName?: string,
	/** General name for the post type, usually plural. */
	name?: string,
	/** Label for the new item page title. */
	newItem?: string,
	/** Label used when no items are found. */
	notFound?: string,
	/** Label used when no items are in the trash. */
	notFoundInTrash?: string,
	/** Label used to prefix parents of hierarchical items. */
	parentItemColon?: string,
	/** Label for removing the featured image. */
	removeFeaturedImage?: string,
	/** Label for searching plural items. */
	searchItems?: string,
	/** Label for setting the featured image. */
	setFeaturedImage?: string,
	/** Name for one object of this post type. */
	singularName?: string,
	/** Label for the media frame filter. */
	uploadedToThisItem?: string,
	/** Label in the media frame for using a featured image. */
	useFeaturedImage?: string,
	/** Label for viewing a singular item. */
	viewItem?: string,
	/** Label for viewing post type archives. */
	viewItems?: string
};
	/** Connection between the ContentNode type and the User type */
["ContentNodeToEditLockConnectionEdge"]: {
	__typename: "ContentNodeToEditLockConnectionEdge",
	/** The timestamp for when the node was last edited */
	lockTimestamp?: string,
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["User"]
};
	/** A User object */
["User"]: {
	__typename: "User",
	/** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
	avatar?: GraphQLTypes["Avatar"],
	/** Connection between the User type and the badge type */
	badges?: GraphQLTypes["UserToBadgeConnection"],
	/** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
	capKey?: string,
	/** A list of capabilities (permissions) granted to the user */
	capabilities?: Array<string | undefined>,
	/** Connection between the User type and the Comment type */
	comments?: GraphQLTypes["UserToCommentConnection"],
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Identifies the primary key from the database. */
	databaseId: number,
	/** Description of the user. */
	description?: string,
	/** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
	email?: string,
	/** Connection between the User type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["UserToEnqueuedScriptConnection"],
	/** Connection between the User type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["UserToEnqueuedStylesheetConnection"],
	/** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
	extraCapabilities?: Array<string | undefined>,
	/** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
	firstName?: string,
	/** Connection between the User type and the hero type */
	heroes?: GraphQLTypes["UserToHeroConnection"],
	/** The globally unique identifier for the user object. */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
	lastName?: string,
	/** The preferred language locale set for the user. Value derived from get_user_locale(). */
	locale?: string,
	/** Connection between the User type and the mediaItem type */
	mediaItems?: GraphQLTypes["UserToMediaItemConnection"],
	/** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
	name?: string,
	/** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
	nicename?: string,
	/** Nickname of the user. */
	nickname?: string,
	/** Connection between the User type and the page type */
	pages?: GraphQLTypes["UserToPageConnection"],
	/** Connection between the User type and the post type */
	posts?: GraphQLTypes["UserToPostConnection"],
	/** The date the user registered or was created. The field follows a full ISO8601 date string format. */
	registeredDate?: string,
	/** Connection between the User and Revisions authored by the user */
	revisions?: GraphQLTypes["UserToContentRevisionUnionConnection"],
	/** Connection between the User type and the UserRole type */
	roles?: GraphQLTypes["UserToUserRoleConnection"],
	/** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
	slug?: string,
	templates?: Array<string | undefined>,
	/** The unique resource identifier path */
	uri?: string,
	/** A website url that is associated with the user. */
	url?: string,
	/** The Id of the user. Equivalent to WP_User-&gt;ID */
	userId?: number,
	/** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
	username?: string
};
	/** The author of a comment */
["Commenter"]: {
	__typename:"User" | "CommentAuthor",
	/** Identifies the primary key from the database. */
	databaseId: number,
	/** The email address of the author of a comment. */
	email?: string,
	/** The globally unique identifier for the comment author. */
	id: string,
	/** Whether the author information is considered restricted. (not fully public) */
	isRestricted?: boolean,
	/** The name of the author of a comment. */
	name?: string,
	/** The url of the author of a comment. */
	url?: string
	['...on User']: '__union' & GraphQLTypes["User"];
	['...on CommentAuthor']: '__union' & GraphQLTypes["CommentAuthor"];
};
	/** Object that can be identified with a Database ID */
["DatabaseIdentifier"]: {
	__typename:"Badge" | "User" | "Comment" | "Hero" | "MediaItem" | "Page" | "NodeWithFeaturedImage" | "Post" | "Category" | "PostFormat" | "Tag" | "Menu" | "MenuItem" | "Movie",
	/** The unique identifier stored in the database */
	databaseId: number
	['...on Badge']: '__union' & GraphQLTypes["Badge"];
	['...on User']: '__union' & GraphQLTypes["User"];
	['...on Comment']: '__union' & GraphQLTypes["Comment"];
	['...on Hero']: '__union' & GraphQLTypes["Hero"];
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on NodeWithFeaturedImage']: '__union' & GraphQLTypes["NodeWithFeaturedImage"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on PostFormat']: '__union' & GraphQLTypes["PostFormat"];
	['...on Tag']: '__union' & GraphQLTypes["Tag"];
	['...on Menu']: '__union' & GraphQLTypes["Menu"];
	['...on MenuItem']: '__union' & GraphQLTypes["MenuItem"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
};
	/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
["AvatarRatingEnum"]: AvatarRatingEnum;
	/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
["Avatar"]: {
	__typename: "Avatar",
	/** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
	default?: string,
	/** HTML attributes to insert in the IMG element. Is not sanitized. */
	extraAttr?: string,
	/** Whether to always show the default image, never the Gravatar. */
	forceDefault?: boolean,
	/** Whether the avatar was successfully found. */
	foundAvatar?: boolean,
	/** Height of the avatar image. */
	height?: number,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
	rating?: string,
	/** Type of url scheme to use. Typically HTTP vs. HTTPS. */
	scheme?: string,
	/** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
	size?: number,
	/** URL for the gravatar image source. */
	url?: string,
	/** Width of the avatar image. */
	width?: number
};
	/** Arguments for filtering the UserToBadgeConnection connection */
["UserToBadgeConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the User type and the badge type */
["UserToBadgeConnection"]: {
	__typename: "UserToBadgeConnection",
	/** Edges for the UserToBadgeConnection connection */
	edges?: Array<GraphQLTypes["UserToBadgeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Badge"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToBadgeConnectionEdge"]: {
	__typename: "UserToBadgeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Badge"]
};
	/** Arguments for filtering the UserToCommentConnection connection */
["UserToCommentConnectionWhereArgs"]: {
		/** Comment author email address. */
	authorEmail?: string,
	/** Array of author IDs to include comments for. */
	authorIn?: Array<string | undefined>,
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Array<string | undefined>,
	/** Comment author URL. */
	authorUrl?: string,
	/** Array of comment IDs to include. */
	commentIn?: Array<string | undefined>,
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Array<string | undefined>,
	/** Include comments of a given type. */
	commentType?: string,
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Array<string | undefined>,
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: string,
	/** Content object author ID to limit results by. */
	contentAuthor?: Array<string | undefined>,
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Array<string | undefined>,
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Array<string | undefined>,
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: string,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Array<string | undefined>,
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Array<string | undefined>,
	/** Content object name to retrieve affiliated comments for. */
	contentName?: string,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: number,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Array<string | undefined>,
	/** Karma score to retrieve matching comments for. */
	karma?: number,
	/** The cardinality of the order of the connection */
	order?: GraphQLTypes["OrderEnum"],
	/** Field to order the comments by. */
	orderby?: GraphQLTypes["CommentsConnectionOrderbyEnum"],
	/** Parent ID of comment to retrieve children of. */
	parent?: number,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Array<string | undefined>,
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Array<string | undefined>,
	/** Search term(s) to retrieve matching comments for. */
	search?: string,
	/** Comment status to limit results by. */
	status?: string,
	/** Include comments for a specific user ID. */
	userId?: string
};
	/** Options for ordering the connection */
["CommentsConnectionOrderbyEnum"]: CommentsConnectionOrderbyEnum;
	/** Connection between the User type and the Comment type */
["UserToCommentConnection"]: {
	__typename: "UserToCommentConnection",
	/** Edges for the UserToCommentConnection connection */
	edges?: Array<GraphQLTypes["UserToCommentConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Comment"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToCommentConnectionEdge"]: {
	__typename: "UserToCommentConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Comment"]
};
	/** A Comment object */
["Comment"]: {
	__typename: "Comment",
	/** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
	agent?: string,
	/** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
	approved?: boolean,
	/** The author of the comment */
	author?: GraphQLTypes["CommentToCommenterConnectionEdge"],
	/** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
	authorIp?: string,
	/** ID for the comment, unique among comments. */
	commentId?: number,
	/** Connection between the Comment type and the ContentNode type */
	commentedOn?: GraphQLTypes["CommentToContentNodeConnectionEdge"],
	/** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
	content?: string,
	/** The unique identifier stored in the database */
	databaseId: number,
	/** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
	date?: string,
	/** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
	dateGmt?: string,
	/** The globally unique identifier for the comment object */
	id: string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
	karma?: number,
	/** Connection between the Comment type and the Comment type */
	parent?: GraphQLTypes["CommentToParentCommentConnectionEdge"],
	/** The database id of the parent comment node or null if it is the root comment */
	parentDatabaseId?: number,
	/** The globally unique identifier of the parent comment node. */
	parentId?: string,
	/** Connection between the Comment type and the Comment type */
	replies?: GraphQLTypes["CommentToCommentConnection"],
	/** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
	type?: string
};
	/** Connection between the Comment type and the Commenter type */
["CommentToCommenterConnectionEdge"]: {
	__typename: "CommentToCommenterConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Commenter"]
};
	/** Connection between the Comment type and the ContentNode type */
["CommentToContentNodeConnectionEdge"]: {
	__typename: "CommentToContentNodeConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["ContentNode"]
};
	/** The format of post field data. */
["PostObjectFieldFormatEnum"]: PostObjectFieldFormatEnum;
	/** Arguments for filtering the CommentToParentCommentConnection connection */
["CommentToParentCommentConnectionWhereArgs"]: {
		/** Comment author email address. */
	authorEmail?: string,
	/** Array of author IDs to include comments for. */
	authorIn?: Array<string | undefined>,
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Array<string | undefined>,
	/** Comment author URL. */
	authorUrl?: string,
	/** Array of comment IDs to include. */
	commentIn?: Array<string | undefined>,
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Array<string | undefined>,
	/** Include comments of a given type. */
	commentType?: string,
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Array<string | undefined>,
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: string,
	/** Content object author ID to limit results by. */
	contentAuthor?: Array<string | undefined>,
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Array<string | undefined>,
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Array<string | undefined>,
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: string,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Array<string | undefined>,
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Array<string | undefined>,
	/** Content object name to retrieve affiliated comments for. */
	contentName?: string,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: number,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Array<string | undefined>,
	/** Karma score to retrieve matching comments for. */
	karma?: number,
	/** The cardinality of the order of the connection */
	order?: GraphQLTypes["OrderEnum"],
	/** Field to order the comments by. */
	orderby?: GraphQLTypes["CommentsConnectionOrderbyEnum"],
	/** Parent ID of comment to retrieve children of. */
	parent?: number,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Array<string | undefined>,
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Array<string | undefined>,
	/** Search term(s) to retrieve matching comments for. */
	search?: string,
	/** Comment status to limit results by. */
	status?: string,
	/** Include comments for a specific user ID. */
	userId?: string
};
	/** Connection between the Comment type and the Comment type */
["CommentToParentCommentConnectionEdge"]: {
	__typename: "CommentToParentCommentConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Comment"]
};
	/** Arguments for filtering the CommentToCommentConnection connection */
["CommentToCommentConnectionWhereArgs"]: {
		/** Comment author email address. */
	authorEmail?: string,
	/** Array of author IDs to include comments for. */
	authorIn?: Array<string | undefined>,
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Array<string | undefined>,
	/** Comment author URL. */
	authorUrl?: string,
	/** Array of comment IDs to include. */
	commentIn?: Array<string | undefined>,
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Array<string | undefined>,
	/** Include comments of a given type. */
	commentType?: string,
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Array<string | undefined>,
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: string,
	/** Content object author ID to limit results by. */
	contentAuthor?: Array<string | undefined>,
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Array<string | undefined>,
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Array<string | undefined>,
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: string,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Array<string | undefined>,
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Array<string | undefined>,
	/** Content object name to retrieve affiliated comments for. */
	contentName?: string,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: number,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Array<string | undefined>,
	/** Karma score to retrieve matching comments for. */
	karma?: number,
	/** The cardinality of the order of the connection */
	order?: GraphQLTypes["OrderEnum"],
	/** Field to order the comments by. */
	orderby?: GraphQLTypes["CommentsConnectionOrderbyEnum"],
	/** Parent ID of comment to retrieve children of. */
	parent?: number,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Array<string | undefined>,
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Array<string | undefined>,
	/** Search term(s) to retrieve matching comments for. */
	search?: string,
	/** Comment status to limit results by. */
	status?: string,
	/** Include comments for a specific user ID. */
	userId?: string
};
	/** Connection between the Comment type and the Comment type */
["CommentToCommentConnection"]: {
	__typename: "CommentToCommentConnection",
	/** Edges for the CommentToCommentConnection connection */
	edges?: Array<GraphQLTypes["CommentToCommentConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Comment"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CommentToCommentConnectionEdge"]: {
	__typename: "CommentToCommentConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Comment"]
};
	/** Connection between the User type and the EnqueuedScript type */
["UserToEnqueuedScriptConnection"]: {
	__typename: "UserToEnqueuedScriptConnection",
	/** Edges for the UserToEnqueuedScriptConnection connection */
	edges?: Array<GraphQLTypes["UserToEnqueuedScriptConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["EnqueuedScript"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToEnqueuedScriptConnectionEdge"]: {
	__typename: "UserToEnqueuedScriptConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["EnqueuedScript"]
};
	/** Script enqueued by the CMS */
["EnqueuedScript"]: {
	__typename: "EnqueuedScript",
	/** @todo */
	args?: boolean,
	/** Dependencies needed to use this asset */
	dependencies?: Array<GraphQLTypes["EnqueuedScript"] | undefined>,
	/** Extra information needed for the script */
	extra?: string,
	/** The handle of the enqueued asset */
	handle?: string,
	/** The ID of the enqueued asset */
	id: string,
	/** The source of the asset */
	src?: string,
	/** The version of the enqueued asset */
	version?: string
};
	/** Asset enqueued by the CMS */
["EnqueuedAsset"]: {
	__typename:"EnqueuedScript" | "EnqueuedStylesheet",
	/** @todo */
	args?: boolean,
	/** Dependencies needed to use this asset */
	dependencies?: Array<GraphQLTypes["EnqueuedScript"] | undefined>,
	/** Extra information needed for the script */
	extra?: string,
	/** The handle of the enqueued asset */
	handle?: string,
	/** The ID of the enqueued asset */
	id: string,
	/** The source of the asset */
	src?: string,
	/** The version of the enqueued asset */
	version?: string
	['...on EnqueuedScript']: '__union' & GraphQLTypes["EnqueuedScript"];
	['...on EnqueuedStylesheet']: '__union' & GraphQLTypes["EnqueuedStylesheet"];
};
	/** Connection between the User type and the EnqueuedStylesheet type */
["UserToEnqueuedStylesheetConnection"]: {
	__typename: "UserToEnqueuedStylesheetConnection",
	/** Edges for the UserToEnqueuedStylesheetConnection connection */
	edges?: Array<GraphQLTypes["UserToEnqueuedStylesheetConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["EnqueuedStylesheet"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToEnqueuedStylesheetConnectionEdge"]: {
	__typename: "UserToEnqueuedStylesheetConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["EnqueuedStylesheet"]
};
	/** Stylesheet enqueued by the CMS */
["EnqueuedStylesheet"]: {
	__typename: "EnqueuedStylesheet",
	/** @todo */
	args?: boolean,
	/** Dependencies needed to use this asset */
	dependencies?: Array<GraphQLTypes["EnqueuedScript"] | undefined>,
	/** Extra information needed for the script */
	extra?: string,
	/** The handle of the enqueued asset */
	handle?: string,
	/** The ID of the enqueued asset */
	id: string,
	/** The source of the asset */
	src?: string,
	/** The version of the enqueued asset */
	version?: string
};
	/** Arguments for filtering the UserToHeroConnection connection */
["UserToHeroConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the User type and the hero type */
["UserToHeroConnection"]: {
	__typename: "UserToHeroConnection",
	/** Edges for the UserToHeroConnection connection */
	edges?: Array<GraphQLTypes["UserToHeroConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Hero"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToHeroConnectionEdge"]: {
	__typename: "UserToHeroConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Hero"]
};
	/** The hero type */
["Hero"]: {
	__typename: "Hero",
	/** Connection between the NodeWithAuthor type and the User type */
	author?: GraphQLTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?: number,
	/** The globally unique identifier of the author of the node */
	authorId?: string,
	/** Connection between the hero type and the badge type */
	awards?: GraphQLTypes["HeroToBadgeConnection"],
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: GraphQLTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId: number,
	/** Post publishing date. */
	date?: string,
	/** The publishing date set in GMT. */
	dateGmt?: string,
	/** The desired slug of the post */
	desiredSlug?: string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: GraphQLTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?: string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: string,
	/** The id field matches the WP_Post-&gt;ID field. */
	heroId: number,
	/** The globally unique identifier of the hero object. */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is a node in the preview state */
	isPreview?: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The user that most recently edited the node */
	lastEditedBy?: GraphQLTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?: string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: string,
	name?: string,
	/** Connection between the hero type and the hero type */
	preview?: GraphQLTypes["HeroToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?: number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?: string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: string,
	/** The current status of the object */
	status?: string,
	/** The template assigned to the node */
	template?: GraphQLTypes["ContentTemplate"],
	templates?: Array<string | undefined>,
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: string,
	/** The unique resource identifier path */
	uri?: string
};
	/** A node that can have a template associated with it */
["NodeWithTemplate"]: {
	__typename:"Badge" | "Hero" | "MediaItem" | "Page" | "Post" | "Movie",
	/** The template assigned to the node */
	template?: GraphQLTypes["ContentTemplate"]
	['...on Badge']: '__union' & GraphQLTypes["Badge"];
	['...on Hero']: '__union' & GraphQLTypes["Hero"];
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
};
	/** The template assigned to a node of content */
["ContentTemplate"]: {
	__typename:"DefaultTemplate" | "CoverTemplate" | "FullWidthTemplate",
	/** The name of the template */
	templateName?: string
	['...on DefaultTemplate']: '__union' & GraphQLTypes["DefaultTemplate"];
	['...on CoverTemplate']: '__union' & GraphQLTypes["CoverTemplate"];
	['...on FullWidthTemplate']: '__union' & GraphQLTypes["FullWidthTemplate"];
};
	/** A node that NodeWith a title */
["NodeWithTitle"]: {
	__typename:"Badge" | "Hero" | "MediaItem" | "Page" | "Post" | "Movie",
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: string
	['...on Badge']: '__union' & GraphQLTypes["Badge"];
	['...on Hero']: '__union' & GraphQLTypes["Hero"];
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
};
	/** A node that can have an author assigned to it */
["NodeWithAuthor"]: {
	__typename:"Badge" | "Hero" | "MediaItem" | "Page" | "Post",
	/** Connection between the NodeWithAuthor type and the User type */
	author?: GraphQLTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?: number,
	/** The globally unique identifier of the author of the node */
	authorId?: string
	['...on Badge']: '__union' & GraphQLTypes["Badge"];
	['...on Hero']: '__union' & GraphQLTypes["Hero"];
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
};
	/** Connection between the NodeWithAuthor type and the User type */
["NodeWithAuthorToUserConnectionEdge"]: {
	__typename: "NodeWithAuthorToUserConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["User"]
};
	/** Connection between the hero type and the badge type */
["HeroToBadgeConnection"]: {
	__typename: "HeroToBadgeConnection",
	/** Edges for the HeroToBadgeConnection connection */
	edges?: Array<GraphQLTypes["HeroToBadgeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Badge"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["HeroToBadgeConnectionEdge"]: {
	__typename: "HeroToBadgeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Badge"]
};
	/** Connection between the ContentNode type and the EnqueuedScript type */
["ContentNodeToEnqueuedScriptConnection"]: {
	__typename: "ContentNodeToEnqueuedScriptConnection",
	/** Edges for the ContentNodeToEnqueuedScriptConnection connection */
	edges?: Array<GraphQLTypes["ContentNodeToEnqueuedScriptConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["EnqueuedScript"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["ContentNodeToEnqueuedScriptConnectionEdge"]: {
	__typename: "ContentNodeToEnqueuedScriptConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["EnqueuedScript"]
};
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
["ContentNodeToEnqueuedStylesheetConnection"]: {
	__typename: "ContentNodeToEnqueuedStylesheetConnection",
	/** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
	edges?: Array<GraphQLTypes["ContentNodeToEnqueuedStylesheetConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["EnqueuedStylesheet"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["ContentNodeToEnqueuedStylesheetConnectionEdge"]: {
	__typename: "ContentNodeToEnqueuedStylesheetConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["EnqueuedStylesheet"]
};
	/** Connection between the ContentNode type and the User type */
["ContentNodeToEditLastConnectionEdge"]: {
	__typename: "ContentNodeToEditLastConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["User"]
};
	/** Connection between the hero type and the hero type */
["HeroToPreviewConnectionEdge"]: {
	__typename: "HeroToPreviewConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Hero"]
};
	/** Arguments for filtering the UserToMediaItemConnection connection */
["UserToMediaItemConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the User type and the mediaItem type */
["UserToMediaItemConnection"]: {
	__typename: "UserToMediaItemConnection",
	/** Edges for the UserToMediaItemConnection connection */
	edges?: Array<GraphQLTypes["UserToMediaItemConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["MediaItem"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToMediaItemConnectionEdge"]: {
	__typename: "UserToMediaItemConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["MediaItem"]
};
	/** The mediaItem type */
["MediaItem"]: {
	__typename: "MediaItem",
	/** Alternative text to display when resource is not displayed */
	altText?: string,
	/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?: GraphQLTypes["HierarchicalContentNodeToContentNodeAncestorsConnection"],
	/** Connection between the NodeWithAuthor type and the User type */
	author?: GraphQLTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?: number,
	/** The globally unique identifier of the author of the node */
	authorId?: string,
	/** The caption for the resource */
	caption?: string,
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children?: GraphQLTypes["HierarchicalContentNodeToContentNodeChildrenConnection"],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?: number,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?: string,
	/** Connection between the mediaItem type and the Comment type */
	comments?: GraphQLTypes["MediaItemToCommentConnection"],
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: GraphQLTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId: number,
	/** Post publishing date. */
	date?: string,
	/** The publishing date set in GMT. */
	dateGmt?: string,
	/** Description of the image (stored as post_content) */
	description?: string,
	/** The desired slug of the post */
	desiredSlug?: string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: GraphQLTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?: string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The filesize in bytes of the resource */
	fileSize?: number,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: string,
	/** The globally unique identifier of the attachment object. */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is a node in the preview state */
	isPreview?: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The user that most recently edited the node */
	lastEditedBy?: GraphQLTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?: string,
	/** Details about the mediaItem */
	mediaDetails?: GraphQLTypes["MediaDetails"],
	/** The id field matches the WP_Post-&gt;ID field. */
	mediaItemId: number,
	/** Url of the mediaItem */
	mediaItemUrl?: string,
	/** Type of resource */
	mediaType?: string,
	/** The mime type of the mediaItem */
	mimeType?: string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: string,
	/** The parent of the node. The parent object can be of various types */
	parent?: GraphQLTypes["HierarchicalContentNodeToParentContentNodeConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?: number,
	/** The globally unique identifier of the parent node. */
	parentId?: string,
	/** The database id of the preview node */
	previewRevisionDatabaseId?: number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?: string,
	/** The sizes attribute value for an image. */
	sizes?: string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: string,
	/** Url of the mediaItem */
	sourceUrl?: string,
	/** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
	srcSet?: string,
	/** The current status of the object */
	status?: string,
	/** The template assigned to the node */
	template?: GraphQLTypes["ContentTemplate"],
	templates?: Array<string | undefined>,
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: string,
	/** The unique resource identifier path */
	uri?: string
};
	/** A node that can have comments associated with it */
["NodeWithComments"]: {
	__typename:"MediaItem" | "Page" | "Post",
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?: number,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?: string
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
};
	/** Content node with hierarchical (parent/child) relationships */
["HierarchicalContentNode"]: {
	__typename:"MediaItem" | "Page",
	/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?: GraphQLTypes["HierarchicalContentNodeToContentNodeAncestorsConnection"],
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children?: GraphQLTypes["HierarchicalContentNodeToContentNodeChildrenConnection"],
	/** The parent of the node. The parent object can be of various types */
	parent?: GraphQLTypes["HierarchicalContentNodeToParentContentNodeConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?: number,
	/** The globally unique identifier of the parent node. */
	parentId?: string
	['...on MediaItem']: '__union' & GraphQLTypes["MediaItem"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
};
	/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
["HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToContentNodeAncestorsConnection"]: {
	__typename: "HierarchicalContentNodeToContentNodeAncestorsConnection",
	/** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
	edges?: Array<GraphQLTypes["HierarchicalContentNodeToContentNodeAncestorsConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["HierarchicalContentNodeToContentNodeAncestorsConnectionEdge"]: {
	__typename: "HierarchicalContentNodeToContentNodeAncestorsConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentNode"]
};
	/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
["HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToContentNodeChildrenConnection"]: {
	__typename: "HierarchicalContentNodeToContentNodeChildrenConnection",
	/** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
	edges?: Array<GraphQLTypes["HierarchicalContentNodeToContentNodeChildrenConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["HierarchicalContentNodeToContentNodeChildrenConnectionEdge"]: {
	__typename: "HierarchicalContentNodeToContentNodeChildrenConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentNode"]
};
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
["HierarchicalContentNodeToParentContentNodeConnectionEdge"]: {
	__typename: "HierarchicalContentNodeToParentContentNodeConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["ContentNode"]
};
	/** Arguments for filtering the MediaItemToCommentConnection connection */
["MediaItemToCommentConnectionWhereArgs"]: {
		/** Comment author email address. */
	authorEmail?: string,
	/** Array of author IDs to include comments for. */
	authorIn?: Array<string | undefined>,
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Array<string | undefined>,
	/** Comment author URL. */
	authorUrl?: string,
	/** Array of comment IDs to include. */
	commentIn?: Array<string | undefined>,
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Array<string | undefined>,
	/** Include comments of a given type. */
	commentType?: string,
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Array<string | undefined>,
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: string,
	/** Content object author ID to limit results by. */
	contentAuthor?: Array<string | undefined>,
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Array<string | undefined>,
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Array<string | undefined>,
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: string,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Array<string | undefined>,
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Array<string | undefined>,
	/** Content object name to retrieve affiliated comments for. */
	contentName?: string,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: number,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Array<string | undefined>,
	/** Karma score to retrieve matching comments for. */
	karma?: number,
	/** The cardinality of the order of the connection */
	order?: GraphQLTypes["OrderEnum"],
	/** Field to order the comments by. */
	orderby?: GraphQLTypes["CommentsConnectionOrderbyEnum"],
	/** Parent ID of comment to retrieve children of. */
	parent?: number,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Array<string | undefined>,
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Array<string | undefined>,
	/** Search term(s) to retrieve matching comments for. */
	search?: string,
	/** Comment status to limit results by. */
	status?: string,
	/** Include comments for a specific user ID. */
	userId?: string
};
	/** Connection between the mediaItem type and the Comment type */
["MediaItemToCommentConnection"]: {
	__typename: "MediaItemToCommentConnection",
	/** Edges for the MediaItemToCommentConnection connection */
	edges?: Array<GraphQLTypes["MediaItemToCommentConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Comment"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["MediaItemToCommentConnectionEdge"]: {
	__typename: "MediaItemToCommentConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Comment"]
};
	/** The size of the media item object. */
["MediaItemSizeEnum"]: MediaItemSizeEnum;
	/** File details for a Media Item */
["MediaDetails"]: {
	__typename: "MediaDetails",
	/** The filename of the mediaItem */
	file?: string,
	/** The height of the mediaItem */
	height?: number,
	/** Meta information associated with the mediaItem */
	meta?: GraphQLTypes["MediaItemMeta"],
	/** The available sizes of the mediaItem */
	sizes?: Array<GraphQLTypes["MediaSize"] | undefined>,
	/** The width of the mediaItem */
	width?: number
};
	/** Meta connected to a MediaItem */
["MediaItemMeta"]: {
	__typename: "MediaItemMeta",
	/** Aperture measurement of the media item. */
	aperture?: number,
	/** Information about the camera used to create the media item. */
	camera?: string,
	/** The text string description associated with the media item. */
	caption?: string,
	/** Copyright information associated with the media item. */
	copyright?: string,
	/** The date/time when the media was created. */
	createdTimestamp?: number,
	/** The original creator of the media item. */
	credit?: string,
	/** The focal length value of the media item. */
	focalLength?: number,
	/** The ISO (International Organization for Standardization) value of the media item. */
	iso?: number,
	/** List of keywords used to describe or identfy the media item. */
	keywords?: Array<string | undefined>,
	/** The vertical or horizontal aspect of the media item. */
	orientation?: string,
	/** The shutter speed information of the media item. */
	shutterSpeed?: number,
	/** A useful title for the media item. */
	title?: string
};
	/** Details of an available size for a media item */
["MediaSize"]: {
	__typename: "MediaSize",
	/** The filename of the referenced size */
	file?: string,
	/** The filesize of the resource */
	fileSize?: number,
	/** The height of the referenced size */
	height?: string,
	/** The mime type of the referenced size */
	mimeType?: string,
	/** The referenced size name */
	name?: string,
	/** The url of the referenced size */
	sourceUrl?: string,
	/** The width of the referenced size */
	width?: string
};
	/** Arguments for filtering the UserToPageConnection connection */
["UserToPageConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the User type and the page type */
["UserToPageConnection"]: {
	__typename: "UserToPageConnection",
	/** Edges for the UserToPageConnection connection */
	edges?: Array<GraphQLTypes["UserToPageConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Page"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToPageConnectionEdge"]: {
	__typename: "UserToPageConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Page"]
};
	/** The page type */
["Page"]: {
	__typename: "Page",
	/** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?: GraphQLTypes["HierarchicalContentNodeToContentNodeAncestorsConnection"],
	/** Connection between the NodeWithAuthor type and the User type */
	author?: GraphQLTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?: number,
	/** The globally unique identifier of the author of the node */
	authorId?: string,
	/** Connection between the HierarchicalContentNode type and the ContentNode type */
	children?: GraphQLTypes["HierarchicalContentNodeToContentNodeChildrenConnection"],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?: number,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?: string,
	/** Connection between the page type and the Comment type */
	comments?: GraphQLTypes["PageToCommentConnection"],
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** The content of the post. */
	content?: string,
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: GraphQLTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId: number,
	/** Post publishing date. */
	date?: string,
	/** The publishing date set in GMT. */
	dateGmt?: string,
	/** The desired slug of the post */
	desiredSlug?: string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: GraphQLTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?: string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?: GraphQLTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?: number,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?: string,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: string,
	/** The globally unique identifier of the page object. */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether this page is set to the static front page. */
	isFrontPage: boolean,
	/** Whether this page is set to the blog posts page. */
	isPostsPage: boolean,
	/** Whether the object is a node in the preview state */
	isPreview?: boolean,
	/** Whether this page is set to the privacy page. */
	isPrivacyPage: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** True if the node is a revision of another node */
	isRevision?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The user that most recently edited the node */
	lastEditedBy?: GraphQLTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: string,
	/** The id field matches the WP_Post-&gt;ID field. */
	pageId: number,
	/** The parent of the node. The parent object can be of various types */
	parent?: GraphQLTypes["HierarchicalContentNodeToParentContentNodeConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?: number,
	/** The globally unique identifier of the parent node. */
	parentId?: string,
	/** Connection between the page type and the page type */
	preview?: GraphQLTypes["PageToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?: number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?: string,
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?: GraphQLTypes["NodeWithRevisionsToContentNodeConnectionEdge"],
	/** Connection between the page type and the page type */
	revisions?: GraphQLTypes["PageToRevisionConnection"],
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: string,
	/** The current status of the object */
	status?: string,
	/** The template assigned to a node of content */
	template?: GraphQLTypes["ContentTemplate"],
	templates?: Array<string | undefined>,
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: string,
	/** The unique resource identifier path */
	uri?: string
};
	/** A node that supports the content editor */
["NodeWithContentEditor"]: {
	__typename:"Page" | "Post" | "Movie",
	/** The content of the post. */
	content?: string
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
};
	/** A node that can have a featured image set */
["NodeWithFeaturedImage"]: {
	__typename:"Page" | "Post" | "Movie",
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: GraphQLTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique identifier stored in the database */
	databaseId: number,
	/** Post publishing date. */
	date?: string,
	/** The publishing date set in GMT. */
	dateGmt?: string,
	/** The desired slug of the post */
	desiredSlug?: string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: GraphQLTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?: string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?: GraphQLTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?: number,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?: string,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: string,
	/** The unique resource identifier path */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is a node in the preview state */
	isPreview?: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The user that most recently edited the node */
	lastEditedBy?: GraphQLTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?: string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: string,
	/** The database id of the preview node */
	previewRevisionDatabaseId?: number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?: string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: string,
	/** The current status of the object */
	status?: string,
	/** The template assigned to a node of content */
	template?: GraphQLTypes["ContentTemplate"],
	templates?: Array<string | undefined>,
	/** The unique resource identifier path */
	uri?: string
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
};
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
["NodeWithFeaturedImageToMediaItemConnectionEdge"]: {
	__typename: "NodeWithFeaturedImageToMediaItemConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["MediaItem"]
};
	/** A node that can have revisions */
["NodeWithRevisions"]: {
	__typename:"Page" | "Post",
	/** True if the node is a revision of another node */
	isRevision?: boolean,
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?: GraphQLTypes["NodeWithRevisionsToContentNodeConnectionEdge"]
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
};
	/** Connection between the NodeWithRevisions type and the ContentNode type */
["NodeWithRevisionsToContentNodeConnectionEdge"]: {
	__typename: "NodeWithRevisionsToContentNodeConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["ContentNode"]
};
	/** A node that can have page attributes */
["NodeWithPageAttributes"]: {
	__typename:"Page",
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number
	['...on Page']: '__union' & GraphQLTypes["Page"];
};
	/** Nodes that can be linked to as Menu Items */
["MenuItemLinkable"]: {
	__typename:"Page" | "Post" | "Category" | "Tag" | "Movie",
	/** The unique resource identifier path */
	databaseId: number,
	/** The unique resource identifier path */
	id: string,
	/** The unique resource identifier path */
	uri?: string
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on Tag']: '__union' & GraphQLTypes["Tag"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
};
	/** Arguments for filtering the PageToCommentConnection connection */
["PageToCommentConnectionWhereArgs"]: {
		/** Comment author email address. */
	authorEmail?: string,
	/** Array of author IDs to include comments for. */
	authorIn?: Array<string | undefined>,
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Array<string | undefined>,
	/** Comment author URL. */
	authorUrl?: string,
	/** Array of comment IDs to include. */
	commentIn?: Array<string | undefined>,
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Array<string | undefined>,
	/** Include comments of a given type. */
	commentType?: string,
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Array<string | undefined>,
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: string,
	/** Content object author ID to limit results by. */
	contentAuthor?: Array<string | undefined>,
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Array<string | undefined>,
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Array<string | undefined>,
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: string,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Array<string | undefined>,
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Array<string | undefined>,
	/** Content object name to retrieve affiliated comments for. */
	contentName?: string,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: number,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Array<string | undefined>,
	/** Karma score to retrieve matching comments for. */
	karma?: number,
	/** The cardinality of the order of the connection */
	order?: GraphQLTypes["OrderEnum"],
	/** Field to order the comments by. */
	orderby?: GraphQLTypes["CommentsConnectionOrderbyEnum"],
	/** Parent ID of comment to retrieve children of. */
	parent?: number,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Array<string | undefined>,
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Array<string | undefined>,
	/** Search term(s) to retrieve matching comments for. */
	search?: string,
	/** Comment status to limit results by. */
	status?: string,
	/** Include comments for a specific user ID. */
	userId?: string
};
	/** Connection between the page type and the Comment type */
["PageToCommentConnection"]: {
	__typename: "PageToCommentConnection",
	/** Edges for the PageToCommentConnection connection */
	edges?: Array<GraphQLTypes["PageToCommentConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Comment"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PageToCommentConnectionEdge"]: {
	__typename: "PageToCommentConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Comment"]
};
	/** Connection between the page type and the page type */
["PageToPreviewConnectionEdge"]: {
	__typename: "PageToPreviewConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Page"]
};
	/** Arguments for filtering the pageToRevisionConnection connection */
["PageToRevisionConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the page type and the page type */
["PageToRevisionConnection"]: {
	__typename: "PageToRevisionConnection",
	/** Edges for the pageToRevisionConnection connection */
	edges?: Array<GraphQLTypes["PageToRevisionConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Page"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PageToRevisionConnectionEdge"]: {
	__typename: "PageToRevisionConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Page"]
};
	/** Arguments for filtering the UserToPostConnection connection */
["UserToPostConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Category ID */
	categoryId?: number,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Array<string | undefined>,
	/** Use Category Slug */
	categoryName?: string,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Tag Slug */
	tag?: string,
	/** Use Tag ID */
	tagId?: string,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Array<string | undefined>,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Array<string | undefined>,
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Array<string | undefined>,
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Array<string | undefined>,
	/** Title of the object */
	title?: string
};
	/** Connection between the User type and the post type */
["UserToPostConnection"]: {
	__typename: "UserToPostConnection",
	/** Edges for the UserToPostConnection connection */
	edges?: Array<GraphQLTypes["UserToPostConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Post"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToPostConnectionEdge"]: {
	__typename: "UserToPostConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Post"]
};
	/** The post type */
["Post"]: {
	__typename: "Post",
	/** Connection between the NodeWithAuthor type and the User type */
	author?: GraphQLTypes["NodeWithAuthorToUserConnectionEdge"],
	/** The database identifier of the author of the node */
	authorDatabaseId?: number,
	/** The globally unique identifier of the author of the node */
	authorId?: string,
	/** Connection between the post type and the category type */
	categories?: GraphQLTypes["PostToCategoryConnection"],
	/** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
	commentCount?: number,
	/** Whether the comments are open or closed for this particular post. */
	commentStatus?: string,
	/** Connection between the post type and the Comment type */
	comments?: GraphQLTypes["PostToCommentConnection"],
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** The content of the post. */
	content?: string,
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: GraphQLTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId: number,
	/** Post publishing date. */
	date?: string,
	/** The publishing date set in GMT. */
	dateGmt?: string,
	/** The desired slug of the post */
	desiredSlug?: string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: GraphQLTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?: string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** The excerpt of the post. */
	excerpt?: string,
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?: GraphQLTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?: number,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?: string,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: string,
	/** The globally unique identifier of the post object. */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is a node in the preview state */
	isPreview?: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** True if the node is a revision of another node */
	isRevision?: boolean,
	/** Whether this page is sticky */
	isSticky: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The user that most recently edited the node */
	lastEditedBy?: GraphQLTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?: string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: string,
	/** Whether the pings are open or closed for this particular post. */
	pingStatus?: string,
	/** URLs that have been pinged. */
	pinged?: Array<string | undefined>,
	/** Connection between the post type and the postFormat type */
	postFormats?: GraphQLTypes["PostToPostFormatConnection"],
	/** The id field matches the WP_Post-&gt;ID field. */
	postId: number,
	/** Connection between the post type and the post type */
	preview?: GraphQLTypes["PostToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?: number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?: string,
	/** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
	revisionOf?: GraphQLTypes["NodeWithRevisionsToContentNodeConnectionEdge"],
	/** Connection between the post type and the post type */
	revisions?: GraphQLTypes["PostToRevisionConnection"],
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: string,
	/** The current status of the object */
	status?: string,
	/** Connection between the post type and the tag type */
	tags?: GraphQLTypes["PostToTagConnection"],
	/** The template assigned to a node of content */
	template?: GraphQLTypes["ContentTemplate"],
	templates?: Array<string | undefined>,
	/** Connection between the post type and the TermNode type */
	terms?: GraphQLTypes["PostToTermNodeConnection"],
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: string,
	/** URLs queued to be pinged. */
	toPing?: Array<string | undefined>,
	/** The unique resource identifier path */
	uri?: string
};
	/** A node that can have an excerpt */
["NodeWithExcerpt"]: {
	__typename:"Post",
	/** The excerpt of the post. */
	excerpt?: string
	['...on Post']: '__union' & GraphQLTypes["Post"];
};
	/** A node that can have trackbacks and pingbacks */
["NodeWithTrackbacks"]: {
	__typename:"Post",
	/** Whether the pings are open or closed for this particular post. */
	pingStatus?: string,
	/** URLs that have been pinged. */
	pinged?: Array<string | undefined>,
	/** URLs queued to be pinged. */
	toPing?: Array<string | undefined>
	['...on Post']: '__union' & GraphQLTypes["Post"];
};
	/** Arguments for filtering the PostToCategoryConnection connection */
["PostToCategoryConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Options for ordering the connection by */
["TermObjectsConnectionOrderbyEnum"]: TermObjectsConnectionOrderbyEnum;
	/** Connection between the post type and the category type */
["PostToCategoryConnection"]: {
	__typename: "PostToCategoryConnection",
	/** Edges for the PostToCategoryConnection connection */
	edges?: Array<GraphQLTypes["PostToCategoryConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Category"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToCategoryConnectionEdge"]: {
	__typename: "PostToCategoryConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Category"]
};
	/** The category type */
["Category"]: {
	__typename: "Category",
	/** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
	ancestors?: GraphQLTypes["CategoryToAncestorsCategoryConnection"],
	/** The id field matches the WP_Post-&gt;ID field. */
	categoryId?: number,
	/** Connection between the category type and the category type */
	children?: GraphQLTypes["CategoryToCategoryConnection"],
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the category type and the ContentNode type */
	contentNodes?: GraphQLTypes["CategoryToContentNodeConnection"],
	/** The number of objects connected to the object */
	count?: number,
	/** The unique resource identifier path */
	databaseId: number,
	/** The description of the object */
	description?: string,
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["TermNodeToEnqueuedScriptConnection"],
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["TermNodeToEnqueuedStylesheetConnection"],
	/** The unique resource identifier path */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The link to the term */
	link?: string,
	/** The human friendly name of the object. */
	name?: string,
	/** Connection between the category type and the category type */
	parent?: GraphQLTypes["CategoryToParentCategoryConnectionEdge"],
	/** Database id of the parent node */
	parentDatabaseId?: number,
	/** The globally unique identifier of the parent node. */
	parentId?: string,
	/** Connection between the category type and the post type */
	posts?: GraphQLTypes["CategoryToPostConnection"],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?: string,
	/** Connection between the category type and the Taxonomy type */
	taxonomy?: GraphQLTypes["CategoryToTaxonomyConnectionEdge"],
	templates?: Array<string | undefined>,
	/** The ID of the term group that this term object belongs to */
	termGroupId?: number,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?: number,
	/** The unique resource identifier path */
	uri?: string
};
	/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
["TermNode"]: {
	__typename:"Category" | "PostFormat" | "Tag",
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** The number of objects connected to the object */
	count?: number,
	/** Identifies the primary key from the database. */
	databaseId: number,
	/** The description of the object */
	description?: string,
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["TermNodeToEnqueuedScriptConnection"],
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["TermNodeToEnqueuedStylesheetConnection"],
	/** The unique resource identifier path */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The link to the term */
	link?: string,
	/** The human friendly name of the object. */
	name?: string,
	/** An alphanumeric identifier for the object unique to its type. */
	slug?: string,
	templates?: Array<string | undefined>,
	/** The ID of the term group that this term object belongs to */
	termGroupId?: number,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?: number,
	/** The unique resource identifier path */
	uri?: string
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on PostFormat']: '__union' & GraphQLTypes["PostFormat"];
	['...on Tag']: '__union' & GraphQLTypes["Tag"];
};
	/** Connection between the TermNode type and the EnqueuedScript type */
["TermNodeToEnqueuedScriptConnection"]: {
	__typename: "TermNodeToEnqueuedScriptConnection",
	/** Edges for the TermNodeToEnqueuedScriptConnection connection */
	edges?: Array<GraphQLTypes["TermNodeToEnqueuedScriptConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["EnqueuedScript"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TermNodeToEnqueuedScriptConnectionEdge"]: {
	__typename: "TermNodeToEnqueuedScriptConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["EnqueuedScript"]
};
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
["TermNodeToEnqueuedStylesheetConnection"]: {
	__typename: "TermNodeToEnqueuedStylesheetConnection",
	/** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
	edges?: Array<GraphQLTypes["TermNodeToEnqueuedStylesheetConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["EnqueuedStylesheet"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TermNodeToEnqueuedStylesheetConnectionEdge"]: {
	__typename: "TermNodeToEnqueuedStylesheetConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["EnqueuedStylesheet"]
};
	/** Term node with hierarchical (parent/child) relationships */
["HierarchicalTermNode"]: {
	__typename:"Category",
	/** Database id of the parent node */
	parentDatabaseId?: number,
	/** The globally unique identifier of the parent node. */
	parentId?: string
	['...on Category']: '__union' & GraphQLTypes["Category"];
};
	/** Connection between the category type and the category type */
["CategoryToAncestorsCategoryConnection"]: {
	__typename: "CategoryToAncestorsCategoryConnection",
	/** Edges for the CategoryToAncestorsCategoryConnection connection */
	edges?: Array<GraphQLTypes["CategoryToAncestorsCategoryConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Category"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CategoryToAncestorsCategoryConnectionEdge"]: {
	__typename: "CategoryToAncestorsCategoryConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Category"]
};
	/** Arguments for filtering the CategoryToCategoryConnection connection */
["CategoryToCategoryConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Connection between the category type and the category type */
["CategoryToCategoryConnection"]: {
	__typename: "CategoryToCategoryConnection",
	/** Edges for the CategoryToCategoryConnection connection */
	edges?: Array<GraphQLTypes["CategoryToCategoryConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Category"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CategoryToCategoryConnectionEdge"]: {
	__typename: "CategoryToCategoryConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Category"]
};
	/** Arguments for filtering the CategoryToContentNodeConnection connection */
["CategoryToContentNodeConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypesOfCategoryEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Allowed Content Types of the Category taxonomy. */
["ContentTypesOfCategoryEnum"]: ContentTypesOfCategoryEnum;
	/** Connection between the category type and the ContentNode type */
["CategoryToContentNodeConnection"]: {
	__typename: "CategoryToContentNodeConnection",
	/** Edges for the CategoryToContentNodeConnection connection */
	edges?: Array<GraphQLTypes["CategoryToContentNodeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CategoryToContentNodeConnectionEdge"]: {
	__typename: "CategoryToContentNodeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentNode"]
};
	/** Connection between the category type and the category type */
["CategoryToParentCategoryConnectionEdge"]: {
	__typename: "CategoryToParentCategoryConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Category"]
};
	/** Arguments for filtering the CategoryToPostConnection connection */
["CategoryToPostConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Category ID */
	categoryId?: number,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Array<string | undefined>,
	/** Use Category Slug */
	categoryName?: string,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Tag Slug */
	tag?: string,
	/** Use Tag ID */
	tagId?: string,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Array<string | undefined>,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Array<string | undefined>,
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Array<string | undefined>,
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Array<string | undefined>,
	/** Title of the object */
	title?: string
};
	/** Connection between the category type and the post type */
["CategoryToPostConnection"]: {
	__typename: "CategoryToPostConnection",
	/** Edges for the CategoryToPostConnection connection */
	edges?: Array<GraphQLTypes["CategoryToPostConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Post"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["CategoryToPostConnectionEdge"]: {
	__typename: "CategoryToPostConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Post"]
};
	/** Connection between the category type and the Taxonomy type */
["CategoryToTaxonomyConnectionEdge"]: {
	__typename: "CategoryToTaxonomyConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Taxonomy"]
};
	/** Arguments for filtering the PostToCommentConnection connection */
["PostToCommentConnectionWhereArgs"]: {
		/** Comment author email address. */
	authorEmail?: string,
	/** Array of author IDs to include comments for. */
	authorIn?: Array<string | undefined>,
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Array<string | undefined>,
	/** Comment author URL. */
	authorUrl?: string,
	/** Array of comment IDs to include. */
	commentIn?: Array<string | undefined>,
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Array<string | undefined>,
	/** Include comments of a given type. */
	commentType?: string,
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Array<string | undefined>,
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: string,
	/** Content object author ID to limit results by. */
	contentAuthor?: Array<string | undefined>,
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Array<string | undefined>,
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Array<string | undefined>,
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: string,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Array<string | undefined>,
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Array<string | undefined>,
	/** Content object name to retrieve affiliated comments for. */
	contentName?: string,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: number,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Array<string | undefined>,
	/** Karma score to retrieve matching comments for. */
	karma?: number,
	/** The cardinality of the order of the connection */
	order?: GraphQLTypes["OrderEnum"],
	/** Field to order the comments by. */
	orderby?: GraphQLTypes["CommentsConnectionOrderbyEnum"],
	/** Parent ID of comment to retrieve children of. */
	parent?: number,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Array<string | undefined>,
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Array<string | undefined>,
	/** Search term(s) to retrieve matching comments for. */
	search?: string,
	/** Comment status to limit results by. */
	status?: string,
	/** Include comments for a specific user ID. */
	userId?: string
};
	/** Connection between the post type and the Comment type */
["PostToCommentConnection"]: {
	__typename: "PostToCommentConnection",
	/** Edges for the PostToCommentConnection connection */
	edges?: Array<GraphQLTypes["PostToCommentConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Comment"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToCommentConnectionEdge"]: {
	__typename: "PostToCommentConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Comment"]
};
	/** Arguments for filtering the PostToPostFormatConnection connection */
["PostToPostFormatConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Connection between the post type and the postFormat type */
["PostToPostFormatConnection"]: {
	__typename: "PostToPostFormatConnection",
	/** Edges for the PostToPostFormatConnection connection */
	edges?: Array<GraphQLTypes["PostToPostFormatConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["PostFormat"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToPostFormatConnectionEdge"]: {
	__typename: "PostToPostFormatConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["PostFormat"]
};
	/** The postFormat type */
["PostFormat"]: {
	__typename: "PostFormat",
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the postFormat type and the ContentNode type */
	contentNodes?: GraphQLTypes["PostFormatToContentNodeConnection"],
	/** The number of objects connected to the object */
	count?: number,
	/** The unique identifier stored in the database */
	databaseId: number,
	/** The description of the object */
	description?: string,
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["TermNodeToEnqueuedScriptConnection"],
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["TermNodeToEnqueuedStylesheetConnection"],
	/** The unique resource identifier path */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The link to the term */
	link?: string,
	/** The human friendly name of the object. */
	name?: string,
	/** The id field matches the WP_Post-&gt;ID field. */
	postFormatId?: number,
	/** Connection between the postFormat type and the post type */
	posts?: GraphQLTypes["PostFormatToPostConnection"],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?: string,
	/** Connection between the postFormat type and the Taxonomy type */
	taxonomy?: GraphQLTypes["PostFormatToTaxonomyConnectionEdge"],
	templates?: Array<string | undefined>,
	/** The ID of the term group that this term object belongs to */
	termGroupId?: number,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?: number,
	/** The unique resource identifier path */
	uri?: string
};
	/** Arguments for filtering the PostFormatToContentNodeConnection connection */
["PostFormatToContentNodeConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypesOfPostFormatEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Allowed Content Types of the PostFormat taxonomy. */
["ContentTypesOfPostFormatEnum"]: ContentTypesOfPostFormatEnum;
	/** Connection between the postFormat type and the ContentNode type */
["PostFormatToContentNodeConnection"]: {
	__typename: "PostFormatToContentNodeConnection",
	/** Edges for the PostFormatToContentNodeConnection connection */
	edges?: Array<GraphQLTypes["PostFormatToContentNodeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostFormatToContentNodeConnectionEdge"]: {
	__typename: "PostFormatToContentNodeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentNode"]
};
	/** Arguments for filtering the PostFormatToPostConnection connection */
["PostFormatToPostConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Category ID */
	categoryId?: number,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Array<string | undefined>,
	/** Use Category Slug */
	categoryName?: string,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Tag Slug */
	tag?: string,
	/** Use Tag ID */
	tagId?: string,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Array<string | undefined>,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Array<string | undefined>,
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Array<string | undefined>,
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Array<string | undefined>,
	/** Title of the object */
	title?: string
};
	/** Connection between the postFormat type and the post type */
["PostFormatToPostConnection"]: {
	__typename: "PostFormatToPostConnection",
	/** Edges for the PostFormatToPostConnection connection */
	edges?: Array<GraphQLTypes["PostFormatToPostConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Post"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostFormatToPostConnectionEdge"]: {
	__typename: "PostFormatToPostConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Post"]
};
	/** Connection between the postFormat type and the Taxonomy type */
["PostFormatToTaxonomyConnectionEdge"]: {
	__typename: "PostFormatToTaxonomyConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Taxonomy"]
};
	/** Connection between the post type and the post type */
["PostToPreviewConnectionEdge"]: {
	__typename: "PostToPreviewConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Post"]
};
	/** Arguments for filtering the postToRevisionConnection connection */
["PostToRevisionConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Category ID */
	categoryId?: number,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Array<string | undefined>,
	/** Use Category Slug */
	categoryName?: string,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Tag Slug */
	tag?: string,
	/** Use Tag ID */
	tagId?: string,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Array<string | undefined>,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Array<string | undefined>,
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Array<string | undefined>,
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Array<string | undefined>,
	/** Title of the object */
	title?: string
};
	/** Connection between the post type and the post type */
["PostToRevisionConnection"]: {
	__typename: "PostToRevisionConnection",
	/** Edges for the postToRevisionConnection connection */
	edges?: Array<GraphQLTypes["PostToRevisionConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Post"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToRevisionConnectionEdge"]: {
	__typename: "PostToRevisionConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Post"]
};
	/** Arguments for filtering the PostToTagConnection connection */
["PostToTagConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Connection between the post type and the tag type */
["PostToTagConnection"]: {
	__typename: "PostToTagConnection",
	/** Edges for the PostToTagConnection connection */
	edges?: Array<GraphQLTypes["PostToTagConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Tag"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToTagConnectionEdge"]: {
	__typename: "PostToTagConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Tag"]
};
	/** The tag type */
["Tag"]: {
	__typename: "Tag",
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** Connection between the tag type and the ContentNode type */
	contentNodes?: GraphQLTypes["TagToContentNodeConnection"],
	/** The number of objects connected to the object */
	count?: number,
	/** The unique resource identifier path */
	databaseId: number,
	/** The description of the object */
	description?: string,
	/** Connection between the TermNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["TermNodeToEnqueuedScriptConnection"],
	/** Connection between the TermNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["TermNodeToEnqueuedStylesheetConnection"],
	/** The unique resource identifier path */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The link to the term */
	link?: string,
	/** The human friendly name of the object. */
	name?: string,
	/** Connection between the tag type and the post type */
	posts?: GraphQLTypes["TagToPostConnection"],
	/** An alphanumeric identifier for the object unique to its type. */
	slug?: string,
	/** The id field matches the WP_Post-&gt;ID field. */
	tagId?: number,
	/** Connection between the tag type and the Taxonomy type */
	taxonomy?: GraphQLTypes["TagToTaxonomyConnectionEdge"],
	templates?: Array<string | undefined>,
	/** The ID of the term group that this term object belongs to */
	termGroupId?: number,
	/** The taxonomy ID that the object is associated with */
	termTaxonomyId?: number,
	/** The unique resource identifier path */
	uri?: string
};
	/** Arguments for filtering the TagToContentNodeConnection connection */
["TagToContentNodeConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypesOfTagEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Allowed Content Types of the Tag taxonomy. */
["ContentTypesOfTagEnum"]: ContentTypesOfTagEnum;
	/** Connection between the tag type and the ContentNode type */
["TagToContentNodeConnection"]: {
	__typename: "TagToContentNodeConnection",
	/** Edges for the TagToContentNodeConnection connection */
	edges?: Array<GraphQLTypes["TagToContentNodeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TagToContentNodeConnectionEdge"]: {
	__typename: "TagToContentNodeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentNode"]
};
	/** Arguments for filtering the TagToPostConnection connection */
["TagToPostConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Category ID */
	categoryId?: number,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Array<string | undefined>,
	/** Use Category Slug */
	categoryName?: string,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Tag Slug */
	tag?: string,
	/** Use Tag ID */
	tagId?: string,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Array<string | undefined>,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Array<string | undefined>,
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Array<string | undefined>,
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Array<string | undefined>,
	/** Title of the object */
	title?: string
};
	/** Connection between the tag type and the post type */
["TagToPostConnection"]: {
	__typename: "TagToPostConnection",
	/** Edges for the TagToPostConnection connection */
	edges?: Array<GraphQLTypes["TagToPostConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Post"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["TagToPostConnectionEdge"]: {
	__typename: "TagToPostConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Post"]
};
	/** Connection between the tag type and the Taxonomy type */
["TagToTaxonomyConnectionEdge"]: {
	__typename: "TagToTaxonomyConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Taxonomy"]
};
	/** Arguments for filtering the PostToTermNodeConnection connection */
["PostToTermNodeConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** The Taxonomy to filter terms by */
	taxonomies?: Array<GraphQLTypes["TaxonomyEnum"] | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Allowed taxonomies */
["TaxonomyEnum"]: TaxonomyEnum;
	/** Connection between the post type and the TermNode type */
["PostToTermNodeConnection"]: {
	__typename: "PostToTermNodeConnection",
	/** Edges for the PostToTermNodeConnection connection */
	edges?: Array<GraphQLTypes["PostToTermNodeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["TermNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["PostToTermNodeConnectionEdge"]: {
	__typename: "PostToTermNodeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["TermNode"]
};
	/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
["UserToContentRevisionUnionConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the User type and the ContentRevisionUnion type */
["UserToContentRevisionUnionConnection"]: {
	__typename: "UserToContentRevisionUnionConnection",
	/** Edges for the UserToContentRevisionUnionConnection connection */
	edges?: Array<GraphQLTypes["UserToContentRevisionUnionConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentRevisionUnion"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToContentRevisionUnionConnectionEdge"]: {
	__typename: "UserToContentRevisionUnionConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentRevisionUnion"]
};
	/** A union of Content Node Types that support revisions */
["ContentRevisionUnion"]:{
	__typename:"Post" | "Page"
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
};
	/** Connection between the User type and the UserRole type */
["UserToUserRoleConnection"]: {
	__typename: "UserToUserRoleConnection",
	/** Edges for the UserToUserRoleConnection connection */
	edges?: Array<GraphQLTypes["UserToUserRoleConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["UserRole"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["UserToUserRoleConnectionEdge"]: {
	__typename: "UserToUserRoleConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["UserRole"]
};
	/** A user role object */
["UserRole"]: {
	__typename: "UserRole",
	/** The capabilities that belong to this role */
	capabilities?: Array<string | undefined>,
	/** The display name of the role */
	displayName?: string,
	/** The globally unique identifier for the user role object. */
	id: string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** The registered name of the role */
	name?: string
};
	/** Connection between the badge type and the hero type */
["BadgeToHeroConnection"]: {
	__typename: "BadgeToHeroConnection",
	/** Edges for the BadgeToHeroConnection connection */
	edges?: Array<GraphQLTypes["BadgeToHeroConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Hero"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["BadgeToHeroConnectionEdge"]: {
	__typename: "BadgeToHeroConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Hero"]
};
	/** Connection between the badge type and the badge type */
["BadgeToPreviewConnectionEdge"]: {
	__typename: "BadgeToPreviewConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Badge"]
};
	/** Arguments for filtering the RootQueryToBadgeConnection connection */
["RootQueryToBadgeConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the RootQuery type and the badge type */
["RootQueryToBadgeConnection"]: {
	__typename: "RootQueryToBadgeConnection",
	/** Edges for the RootQueryToBadgeConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToBadgeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Badge"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToBadgeConnectionEdge"]: {
	__typename: "RootQueryToBadgeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Badge"]
};
	/** Arguments for filtering the RootQueryToCategoryConnection connection */
["RootQueryToCategoryConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Connection between the RootQuery type and the category type */
["RootQueryToCategoryConnection"]: {
	__typename: "RootQueryToCategoryConnection",
	/** Edges for the RootQueryToCategoryConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToCategoryConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Category"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToCategoryConnectionEdge"]: {
	__typename: "RootQueryToCategoryConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Category"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["CategoryIdType"]: CategoryIdType;
	/** Arguments for filtering the RootQueryToCommentConnection connection */
["RootQueryToCommentConnectionWhereArgs"]: {
		/** Comment author email address. */
	authorEmail?: string,
	/** Array of author IDs to include comments for. */
	authorIn?: Array<string | undefined>,
	/** Array of author IDs to exclude comments for. */
	authorNotIn?: Array<string | undefined>,
	/** Comment author URL. */
	authorUrl?: string,
	/** Array of comment IDs to include. */
	commentIn?: Array<string | undefined>,
	/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
	commentNotIn?: Array<string | undefined>,
	/** Include comments of a given type. */
	commentType?: string,
	/** Include comments from a given array of comment types. */
	commentTypeIn?: Array<string | undefined>,
	/** Exclude comments from a given array of comment types. */
	commentTypeNotIn?: string,
	/** Content object author ID to limit results by. */
	contentAuthor?: Array<string | undefined>,
	/** Array of author IDs to retrieve comments for. */
	contentAuthorIn?: Array<string | undefined>,
	/** Array of author IDs *not* to retrieve comments for. */
	contentAuthorNotIn?: Array<string | undefined>,
	/** Limit results to those affiliated with a given content object ID. */
	contentId?: string,
	/** Array of content object IDs to include affiliated comments for. */
	contentIdIn?: Array<string | undefined>,
	/** Array of content object IDs to exclude affiliated comments for. */
	contentIdNotIn?: Array<string | undefined>,
	/** Content object name to retrieve affiliated comments for. */
	contentName?: string,
	/** Content Object parent ID to retrieve affiliated comments for. */
	contentParent?: number,
	/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentStatus?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
	contentType?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
	includeUnapproved?: Array<string | undefined>,
	/** Karma score to retrieve matching comments for. */
	karma?: number,
	/** The cardinality of the order of the connection */
	order?: GraphQLTypes["OrderEnum"],
	/** Field to order the comments by. */
	orderby?: GraphQLTypes["CommentsConnectionOrderbyEnum"],
	/** Parent ID of comment to retrieve children of. */
	parent?: number,
	/** Array of parent IDs of comments to retrieve children for. */
	parentIn?: Array<string | undefined>,
	/** Array of parent IDs of comments *not* to retrieve children for. */
	parentNotIn?: Array<string | undefined>,
	/** Search term(s) to retrieve matching comments for. */
	search?: string,
	/** Comment status to limit results by. */
	status?: string,
	/** Include comments for a specific user ID. */
	userId?: string
};
	/** Connection between the RootQuery type and the Comment type */
["RootQueryToCommentConnection"]: {
	__typename: "RootQueryToCommentConnection",
	/** Edges for the RootQueryToCommentConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToCommentConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Comment"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToCommentConnectionEdge"]: {
	__typename: "RootQueryToCommentConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Comment"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["ContentNodeIdTypeEnum"]: ContentNodeIdTypeEnum;
	/** Arguments for filtering the RootQueryToContentNodeConnection connection */
["RootQueryToContentNodeConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the RootQuery type and the ContentNode type */
["RootQueryToContentNodeConnection"]: {
	__typename: "RootQueryToContentNodeConnection",
	/** Edges for the RootQueryToContentNodeConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToContentNodeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToContentNodeConnectionEdge"]: {
	__typename: "RootQueryToContentNodeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentNode"]
};
	/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
["ContentTypeIdTypeEnum"]: ContentTypeIdTypeEnum;
	/** Connection between the RootQuery type and the ContentType type */
["RootQueryToContentTypeConnection"]: {
	__typename: "RootQueryToContentTypeConnection",
	/** Edges for the RootQueryToContentTypeConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToContentTypeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentType"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToContentTypeConnectionEdge"]: {
	__typename: "RootQueryToContentTypeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentType"]
};
	/** The discussion setting type */
["DiscussionSettings"]: {
	__typename: "DiscussionSettings",
	/** Allow people to submit comments on new posts. */
	defaultCommentStatus?: string,
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	defaultPingStatus?: string
};
	/** The general setting type */
["GeneralSettings"]: {
	__typename: "GeneralSettings",
	/** A date format for all date strings. */
	dateFormat?: string,
	/** Site tagline. */
	description?: string,
	/** This address is used for admin purposes, like new user notification. */
	email?: string,
	/** WordPress locale code. */
	language?: string,
	/** A day number of the week that the week should start on. */
	startOfWeek?: number,
	/** A time format for all time strings. */
	timeFormat?: string,
	/** A city in the same timezone as you. */
	timezone?: string,
	/** Site title. */
	title?: string,
	/** Site URL. */
	url?: string
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["HeroIdType"]: HeroIdType;
	/** Arguments for filtering the RootQueryToHeroConnection connection */
["RootQueryToHeroConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the RootQuery type and the hero type */
["RootQueryToHeroConnection"]: {
	__typename: "RootQueryToHeroConnection",
	/** Edges for the RootQueryToHeroConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToHeroConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Hero"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToHeroConnectionEdge"]: {
	__typename: "RootQueryToHeroConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Hero"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["MediaItemIdType"]: MediaItemIdType;
	/** Arguments for filtering the RootQueryToMediaItemConnection connection */
["RootQueryToMediaItemConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the RootQuery type and the mediaItem type */
["RootQueryToMediaItemConnection"]: {
	__typename: "RootQueryToMediaItemConnection",
	/** Edges for the RootQueryToMediaItemConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToMediaItemConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["MediaItem"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToMediaItemConnectionEdge"]: {
	__typename: "RootQueryToMediaItemConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["MediaItem"]
};
	/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
["MenuNodeIdTypeEnum"]: MenuNodeIdTypeEnum;
	/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
["Menu"]: {
	__typename: "Menu",
	/** The number of items in the menu */
	count?: number,
	/** The unique identifier stored in the database */
	databaseId: number,
	/** The globally unique identifier of the nav menu object. */
	id: string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** The locations a menu is assigned to */
	locations?: Array<GraphQLTypes["MenuLocationEnum"] | undefined>,
	/** WP ID of the nav menu. */
	menuId?: number,
	/** Connection between the Menu type and the MenuItem type */
	menuItems?: GraphQLTypes["MenuToMenuItemConnection"],
	/** Display name of the menu. Equivalent to WP_Term-&gt;name. */
	name?: string,
	/** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
	slug?: string
};
	/** Registered menu locations */
["MenuLocationEnum"]: MenuLocationEnum;
	/** Arguments for filtering the MenuToMenuItemConnection connection */
["MenuToMenuItemConnectionWhereArgs"]: {
		/** The ID of the object */
	id?: number,
	/** The menu location for the menu being queried */
	location?: GraphQLTypes["MenuLocationEnum"],
	/** The database ID of the parent menu object */
	parentDatabaseId?: number,
	/** The ID of the parent menu object */
	parentId?: string
};
	/** Connection between the Menu type and the MenuItem type */
["MenuToMenuItemConnection"]: {
	__typename: "MenuToMenuItemConnection",
	/** Edges for the MenuToMenuItemConnection connection */
	edges?: Array<GraphQLTypes["MenuToMenuItemConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["MenuItem"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["MenuToMenuItemConnectionEdge"]: {
	__typename: "MenuToMenuItemConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["MenuItem"]
};
	/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
["MenuItem"]: {
	__typename: "MenuItem",
	/** Connection between the MenuItem type and the MenuItem type */
	childItems?: GraphQLTypes["MenuItemToMenuItemConnection"],
	/** Connection from MenuItem to it&#039;s connected node */
	connectedNode?: GraphQLTypes["MenuItemToMenuItemLinkableConnectionEdge"],
	/** The object connected to this menu item. */
	connectedObject?: GraphQLTypes["MenuItemObjectUnion"],
	/** Class attribute for the menu item link */
	cssClasses?: Array<string | undefined>,
	/** The unique identifier stored in the database */
	databaseId: number,
	/** Description of the menu item. */
	description?: string,
	/** The globally unique identifier of the nav menu item object. */
	id: string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Label or title of the menu item. */
	label?: string,
	/** Link relationship (XFN) of the menu item. */
	linkRelationship?: string,
	/** The locations the menu item&#039;s Menu is assigned to */
	locations?: Array<GraphQLTypes["MenuLocationEnum"] | undefined>,
	/** The Menu a MenuItem is part of */
	menu?: GraphQLTypes["MenuItemToMenuConnectionEdge"],
	/** WP ID of the menu item. */
	menuItemId?: number,
	/** Menu item order */
	order?: number,
	/** The database id of the parent menu item or null if it is the root */
	parentDatabaseId?: number,
	/** The globally unique identifier of the parent nav menu item object. */
	parentId?: string,
	/** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
	path?: string,
	/** Target attribute for the menu item link. */
	target?: string,
	/** Title attribute for the menu item link */
	title?: string,
	/** URL or destination of the menu item. */
	url?: string
};
	/** Arguments for filtering the MenuItemToMenuItemConnection connection */
["MenuItemToMenuItemConnectionWhereArgs"]: {
		/** The ID of the object */
	id?: number,
	/** The menu location for the menu being queried */
	location?: GraphQLTypes["MenuLocationEnum"],
	/** The database ID of the parent menu object */
	parentDatabaseId?: number,
	/** The ID of the parent menu object */
	parentId?: string
};
	/** Connection between the MenuItem type and the MenuItem type */
["MenuItemToMenuItemConnection"]: {
	__typename: "MenuItemToMenuItemConnection",
	/** Edges for the MenuItemToMenuItemConnection connection */
	edges?: Array<GraphQLTypes["MenuItemToMenuItemConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["MenuItem"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["MenuItemToMenuItemConnectionEdge"]: {
	__typename: "MenuItemToMenuItemConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["MenuItem"]
};
	/** Connection between the MenuItem type and the MenuItemLinkable type */
["MenuItemToMenuItemLinkableConnectionEdge"]: {
	__typename: "MenuItemToMenuItemLinkableConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["MenuItemLinkable"]
};
	/** Deprecated in favor of MenuItemLinkeable Interface */
["MenuItemObjectUnion"]:{
	__typename:"Post" | "Page" | "Movie" | "Category" | "Tag"
	['...on Post']: '__union' & GraphQLTypes["Post"];
	['...on Page']: '__union' & GraphQLTypes["Page"];
	['...on Movie']: '__union' & GraphQLTypes["Movie"];
	['...on Category']: '__union' & GraphQLTypes["Category"];
	['...on Tag']: '__union' & GraphQLTypes["Tag"];
};
	/** The Movie type */
["Movie"]: {
	__typename: "Movie",
	/** The id field matches the WP_Post-&gt;ID field. */
	movieId: number,
	conditionalTags?: GraphQLTypes["ConditionalTags"],
	/** The content of the post. */
	content?: string,
	/** Connection between the ContentNode type and the ContentType type */
	contentType?: GraphQLTypes["ContentNodeToContentTypeConnectionEdge"],
	/** The unique resource identifier path */
	databaseId: number,
	/** Post publishing date. */
	date?: string,
	/** The publishing date set in GMT. */
	dateGmt?: string,
	/** The desired slug of the post */
	desiredSlug?: string,
	/** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
	editingLockedBy?: GraphQLTypes["ContentNodeToEditLockConnectionEdge"],
	/** The RSS enclosure for the object */
	enclosure?: string,
	/** Connection between the ContentNode type and the EnqueuedScript type */
	enqueuedScripts?: GraphQLTypes["ContentNodeToEnqueuedScriptConnection"],
	/** Connection between the ContentNode type and the EnqueuedStylesheet type */
	enqueuedStylesheets?: GraphQLTypes["ContentNodeToEnqueuedStylesheetConnection"],
	/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
	featuredImage?: GraphQLTypes["NodeWithFeaturedImageToMediaItemConnectionEdge"],
	/** The database identifier for the featured image node assigned to the content node */
	featuredImageDatabaseId?: number,
	/** Globally unique ID of the featured image assigned to the node */
	featuredImageId?: string,
	/** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
	guid?: string,
	/** The globally unique identifier of the movie object. */
	id: string,
	/** Whether the node is a Content Node */
	isContentNode: boolean,
	/** Whether the object is a node in the preview state */
	isPreview?: boolean,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Whether the node is a Term */
	isTermNode: boolean,
	/** The user that most recently edited the node */
	lastEditedBy?: GraphQLTypes["ContentNodeToEditLastConnectionEdge"],
	/** The permalink of the post */
	link?: string,
	/** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
	modified?: string,
	/** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
	modifiedGmt?: string,
	/** Connection between the Movie type and the Movie type */
	preview?: GraphQLTypes["MovieToPreviewConnectionEdge"],
	/** The database id of the preview node */
	previewRevisionDatabaseId?: number,
	/** Whether the object is a node in the preview state */
	previewRevisionId?: string,
	/** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
	slug?: string,
	/** The current status of the object */
	status?: string,
	/** The template assigned to a node of content */
	template?: GraphQLTypes["ContentTemplate"],
	templates?: Array<string | undefined>,
	/** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
	title?: string,
	/** The unique resource identifier path */
	uri?: string
};
	/** Connection between the Movie type and the Movie type */
["MovieToPreviewConnectionEdge"]: {
	__typename: "MovieToPreviewConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Movie"]
};
	/** Connection between the MenuItem type and the Menu type */
["MenuItemToMenuConnectionEdge"]: {
	__typename: "MenuItemToMenuConnectionEdge",
	/** The node of the connection, without the edges */
	node?: GraphQLTypes["Menu"]
};
	/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
["MenuItemNodeIdTypeEnum"]: MenuItemNodeIdTypeEnum;
	/** Arguments for filtering the RootQueryToMenuItemConnection connection */
["RootQueryToMenuItemConnectionWhereArgs"]: {
		/** The ID of the object */
	id?: number,
	/** The menu location for the menu being queried */
	location?: GraphQLTypes["MenuLocationEnum"],
	/** The database ID of the parent menu object */
	parentDatabaseId?: number,
	/** The ID of the parent menu object */
	parentId?: string
};
	/** Connection between the RootQuery type and the MenuItem type */
["RootQueryToMenuItemConnection"]: {
	__typename: "RootQueryToMenuItemConnection",
	/** Edges for the RootQueryToMenuItemConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToMenuItemConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["MenuItem"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToMenuItemConnectionEdge"]: {
	__typename: "RootQueryToMenuItemConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["MenuItem"]
};
	/** Arguments for filtering the RootQueryToMenuConnection connection */
["RootQueryToMenuConnectionWhereArgs"]: {
		/** The ID of the object */
	id?: number,
	/** The menu location for the menu being queried */
	location?: GraphQLTypes["MenuLocationEnum"],
	/** The slug of the menu to query items for */
	slug?: string
};
	/** Connection between the RootQuery type and the Menu type */
["RootQueryToMenuConnection"]: {
	__typename: "RootQueryToMenuConnection",
	/** Edges for the RootQueryToMenuConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToMenuConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Menu"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToMenuConnectionEdge"]: {
	__typename: "RootQueryToMenuConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Menu"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["MovieIdType"]: MovieIdType;
	/** Arguments for filtering the RootQueryToMovieConnection connection */
["RootQueryToMovieConnectionWhereArgs"]: {
		/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the RootQuery type and the Movie type */
["RootQueryToMovieConnection"]: {
	__typename: "RootQueryToMovieConnection",
	/** Edges for the RootQueryToMovieConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToMovieConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Movie"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToMovieConnectionEdge"]: {
	__typename: "RootQueryToMovieConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Movie"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PageIdType"]: PageIdType;
	/** Arguments for filtering the RootQueryToPageConnection connection */
["RootQueryToPageConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the RootQuery type and the page type */
["RootQueryToPageConnection"]: {
	__typename: "RootQueryToPageConnection",
	/** Edges for the RootQueryToPageConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToPageConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Page"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToPageConnectionEdge"]: {
	__typename: "RootQueryToPageConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Page"]
};
	/** An plugin object */
["Plugin"]: {
	__typename: "Plugin",
	/** Name of the plugin author(s), may also be a company name. */
	author?: string,
	/** URI for the related author(s)/company website. */
	authorUri?: string,
	/** Description of the plugin. */
	description?: string,
	/** The globally unique identifier of the plugin object. */
	id: string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Display name of the plugin. */
	name?: string,
	/** Plugin path. */
	path?: string,
	/** URI for the plugin website. This is useful for directing users for support requests etc. */
	pluginUri?: string,
	/** Current version of the plugin. */
	version?: string
};
	/** Connection between the RootQuery type and the Plugin type */
["RootQueryToPluginConnection"]: {
	__typename: "RootQueryToPluginConnection",
	/** Edges for the RootQueryToPluginConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToPluginConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Plugin"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToPluginConnectionEdge"]: {
	__typename: "RootQueryToPluginConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Plugin"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PostIdType"]: PostIdType;
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["PostFormatIdType"]: PostFormatIdType;
	/** Arguments for filtering the RootQueryToPostFormatConnection connection */
["RootQueryToPostFormatConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Connection between the RootQuery type and the postFormat type */
["RootQueryToPostFormatConnection"]: {
	__typename: "RootQueryToPostFormatConnection",
	/** Edges for the RootQueryToPostFormatConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToPostFormatConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["PostFormat"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToPostFormatConnectionEdge"]: {
	__typename: "RootQueryToPostFormatConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["PostFormat"]
};
	/** Arguments for filtering the RootQueryToPostConnection connection */
["RootQueryToPostConnectionWhereArgs"]: {
		/** The user that's connected as the author of the object. Use the userId for the author object. */
	author?: number,
	/** Find objects connected to author(s) in the array of author's userIds */
	authorIn?: Array<string | undefined>,
	/** Find objects connected to the author by the author's nicename */
	authorName?: string,
	/** Find objects NOT connected to author(s) in the array of author's userIds */
	authorNotIn?: Array<string | undefined>,
	/** Category ID */
	categoryId?: number,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryIn?: Array<string | undefined>,
	/** Use Category Slug */
	categoryName?: string,
	/** Array of category IDs, used to display objects from one category OR another */
	categoryNotIn?: Array<string | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Tag Slug */
	tag?: string,
	/** Use Tag ID */
	tagId?: string,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagIn?: Array<string | undefined>,
	/** Array of tag IDs, used to display objects from one tag OR another */
	tagNotIn?: Array<string | undefined>,
	/** Array of tag slugs, used to display objects from one tag OR another */
	tagSlugAnd?: Array<string | undefined>,
	/** Array of tag slugs, used to exclude objects in specified tags */
	tagSlugIn?: Array<string | undefined>,
	/** Title of the object */
	title?: string
};
	/** Connection between the RootQuery type and the post type */
["RootQueryToPostConnection"]: {
	__typename: "RootQueryToPostConnection",
	/** Edges for the RootQueryToPostConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToPostConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Post"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToPostConnectionEdge"]: {
	__typename: "RootQueryToPostConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Post"]
};
	/** The reading setting type */
["ReadingSettings"]: {
	__typename: "ReadingSettings",
	/** Blog pages show at most. */
	postsPerPage?: number
};
	/** Connection between the RootQuery type and the EnqueuedScript type */
["RootQueryToEnqueuedScriptConnection"]: {
	__typename: "RootQueryToEnqueuedScriptConnection",
	/** Edges for the RootQueryToEnqueuedScriptConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToEnqueuedScriptConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["EnqueuedScript"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToEnqueuedScriptConnectionEdge"]: {
	__typename: "RootQueryToEnqueuedScriptConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["EnqueuedScript"]
};
	/** Connection between the RootQuery type and the EnqueuedStylesheet type */
["RootQueryToEnqueuedStylesheetConnection"]: {
	__typename: "RootQueryToEnqueuedStylesheetConnection",
	/** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToEnqueuedStylesheetConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["EnqueuedStylesheet"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToEnqueuedStylesheetConnectionEdge"]: {
	__typename: "RootQueryToEnqueuedStylesheetConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["EnqueuedStylesheet"]
};
	/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
["RootQueryToContentRevisionUnionConnectionWhereArgs"]: {
		/** The Types of content to filter */
	contentTypes?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Filter the connection based on dates */
	dateQuery?: GraphQLTypes["DateQueryInput"],
	/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
	hasPassword?: boolean,
	/** Specific ID of the object */
	id?: number,
	/** Array of IDs for the objects to retrieve */
	in?: Array<string | undefined>,
	/** Get objects with a specific mimeType property */
	mimeType?: GraphQLTypes["MimeTypeEnum"],
	/** Slug / post_name of the object */
	name?: string,
	/** Specify objects to retrieve. Use slugs */
	nameIn?: Array<string | undefined>,
	/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
	notIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["PostObjectsConnectionOrderbyInput"] | undefined>,
	/** Use ID to return only children. Use 0 to return only top-level items */
	parent?: string,
	/** Specify objects whose parent is in an array */
	parentIn?: Array<string | undefined>,
	/** Specify posts whose parent is not in an array */
	parentNotIn?: Array<string | undefined>,
	/** Show posts with a specific password. */
	password?: string,
	/** Show Posts based on a keyword search */
	search?: string,
	/** Retrieve posts where post status is in an array. */
	stati?: Array<GraphQLTypes["PostStatusEnum"] | undefined>,
	/** Show posts with a specific status. */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Title of the object */
	title?: string
};
	/** Connection between the RootQuery type and the ContentRevisionUnion type */
["RootQueryToContentRevisionUnionConnection"]: {
	__typename: "RootQueryToContentRevisionUnionConnection",
	/** Edges for the RootQueryToContentRevisionUnionConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToContentRevisionUnionConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["ContentRevisionUnion"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToContentRevisionUnionConnectionEdge"]: {
	__typename: "RootQueryToContentRevisionUnionConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["ContentRevisionUnion"]
};
	/** The Type of Identifier used to fetch a single resource. Default is ID. */
["TagIdType"]: TagIdType;
	/** Arguments for filtering the RootQueryToTagConnection connection */
["RootQueryToTagConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Connection between the RootQuery type and the tag type */
["RootQueryToTagConnection"]: {
	__typename: "RootQueryToTagConnection",
	/** Edges for the RootQueryToTagConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToTagConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Tag"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToTagConnectionEdge"]: {
	__typename: "RootQueryToTagConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Tag"]
};
	/** Connection between the RootQuery type and the Taxonomy type */
["RootQueryToTaxonomyConnection"]: {
	__typename: "RootQueryToTaxonomyConnection",
	/** Edges for the RootQueryToTaxonomyConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToTaxonomyConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Taxonomy"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToTaxonomyConnectionEdge"]: {
	__typename: "RootQueryToTaxonomyConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Taxonomy"]
};
	/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
["TaxonomyIdTypeEnum"]: TaxonomyIdTypeEnum;
	/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
["TermNodeIdTypeEnum"]: TermNodeIdTypeEnum;
	/** Arguments for filtering the RootQueryToTermNodeConnection connection */
["RootQueryToTermNodeConnectionWhereArgs"]: {
		/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
	cacheDomain?: string,
	/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
	childOf?: number,
	/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
	childless?: boolean,
	/** Retrieve terms where the description is LIKE the input value. Default empty. */
	descriptionLike?: string,
	/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
	exclude?: Array<string | undefined>,
	/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
	excludeTree?: Array<string | undefined>,
	/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
	hideEmpty?: boolean,
	/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
	hierarchical?: boolean,
	/** Array of term ids to include. Default empty array. */
	include?: Array<string | undefined>,
	/** Array of names to return term(s) for. Default empty. */
	name?: Array<string | undefined>,
	/** Retrieve terms where the name is LIKE the input value. Default empty. */
	nameLike?: string,
	/** Array of object IDs. Results will be limited to terms associated with these objects. */
	objectIds?: Array<string | undefined>,
	/** Direction the connection should be ordered in */
	order?: GraphQLTypes["OrderEnum"],
	/** Field(s) to order terms by. Defaults to 'name'. */
	orderby?: GraphQLTypes["TermObjectsConnectionOrderbyEnum"],
	/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
	padCounts?: boolean,
	/** Parent term ID to retrieve direct-child terms of. Default empty. */
	parent?: number,
	/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
	search?: string,
	/** Array of slugs to return term(s) for. Default empty. */
	slug?: Array<string | undefined>,
	/** The Taxonomy to filter terms by */
	taxonomies?: Array<GraphQLTypes["TaxonomyEnum"] | undefined>,
	/** Array of term taxonomy IDs, to match when querying terms. */
	termTaxonomId?: Array<string | undefined>,
	/** Whether to prime meta caches for matched terms. Default true. */
	updateTermMetaCache?: boolean
};
	/** Connection between the RootQuery type and the TermNode type */
["RootQueryToTermNodeConnection"]: {
	__typename: "RootQueryToTermNodeConnection",
	/** Edges for the RootQueryToTermNodeConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToTermNodeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["TermNode"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToTermNodeConnectionEdge"]: {
	__typename: "RootQueryToTermNodeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["TermNode"]
};
	/** A theme object */
["Theme"]: {
	__typename: "Theme",
	/** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
	author?: string,
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
	authorUri?: string,
	/** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
	description?: string,
	/** The globally unique identifier of the theme object. */
	id: string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
	name?: string,
	/** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
	screenshot?: string,
	/** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
	slug?: string,
	/** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
	tags?: Array<string | undefined>,
	/** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
	themeUri?: string,
	/** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
	version?: string
};
	/** Connection between the RootQuery type and the Theme type */
["RootQueryToThemeConnection"]: {
	__typename: "RootQueryToThemeConnection",
	/** Edges for the RootQueryToThemeConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToThemeConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["Theme"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToThemeConnectionEdge"]: {
	__typename: "RootQueryToThemeConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["Theme"]
};
	/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
["UserNodeIdTypeEnum"]: UserNodeIdTypeEnum;
	/** Connection between the RootQuery type and the UserRole type */
["RootQueryToUserRoleConnection"]: {
	__typename: "RootQueryToUserRoleConnection",
	/** Edges for the RootQueryToUserRoleConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToUserRoleConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["UserRole"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToUserRoleConnectionEdge"]: {
	__typename: "RootQueryToUserRoleConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["UserRole"]
};
	/** Arguments for filtering the RootQueryToUserConnection connection */
["RootQueryToUserConnectionWhereArgs"]: {
		/** Array of userIds to exclude. */
	exclude?: Array<number | undefined>,
	/** Pass an array of post types to filter results to users who have published posts in those post types. */
	hasPublishedPosts?: Array<GraphQLTypes["ContentTypeEnum"] | undefined>,
	/** Array of userIds to include. */
	include?: Array<number | undefined>,
	/** The user login. */
	login?: string,
	/** An array of logins to include. Users matching one of these logins will be included in results. */
	loginIn?: Array<string | undefined>,
	/** An array of logins to exclude. Users matching one of these logins will not be included in results. */
	loginNotIn?: Array<string | undefined>,
	/** The user nicename. */
	nicename?: string,
	/** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
	nicenameIn?: Array<string | undefined>,
	/** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
	nicenameNotIn?: Array<string | undefined>,
	/** What paramater to use to order the objects by. */
	orderby?: Array<GraphQLTypes["UsersConnectionOrderbyInput"] | undefined>,
	/** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
	role?: GraphQLTypes["UserRoleEnum"],
	/** An array of role names. Matched users must have at least one of these roles. */
	roleIn?: Array<GraphQLTypes["UserRoleEnum"] | undefined>,
	/** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
	roleNotIn?: Array<GraphQLTypes["UserRoleEnum"] | undefined>,
	/** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
	search?: string,
	/** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
	searchColumns?: Array<GraphQLTypes["UsersConnectionSearchColumnEnum"] | undefined>
};
	/** Options for ordering the connection */
["UsersConnectionOrderbyInput"]: {
		/** The field name used to sort the results. */
	field: GraphQLTypes["UsersConnectionOrderbyEnum"],
	/** The cardinality of the order of the connection */
	order?: GraphQLTypes["OrderEnum"]
};
	/** Field to order the connection by */
["UsersConnectionOrderbyEnum"]: UsersConnectionOrderbyEnum;
	/** Names of available user roles */
["UserRoleEnum"]: UserRoleEnum;
	/** Column used for searching for users. */
["UsersConnectionSearchColumnEnum"]: UsersConnectionSearchColumnEnum;
	/** Connection between the RootQuery type and the User type */
["RootQueryToUserConnection"]: {
	__typename: "RootQueryToUserConnection",
	/** Edges for the RootQueryToUserConnection connection */
	edges?: Array<GraphQLTypes["RootQueryToUserConnectionEdge"] | undefined>,
	/** The nodes of the connection, without the edges */
	nodes?: Array<GraphQLTypes["User"] | undefined>,
	/** Information about pagination in a connection. */
	pageInfo?: GraphQLTypes["WPPageInfo"]
};
	/** An edge in a connection */
["RootQueryToUserConnectionEdge"]: {
	__typename: "RootQueryToUserConnectionEdge",
	/** A cursor for use in pagination */
	cursor?: string,
	/** The item at the end of the edge */
	node?: GraphQLTypes["User"]
};
	/** The writing setting type */
["WritingSettings"]: {
	__typename: "WritingSettings",
	/** Default post category. */
	defaultCategory?: number,
	/** Default post format. */
	defaultPostFormat?: string,
	/** Convert emoticons like :-) and :-P to graphics on display. */
	useSmilies?: boolean
};
	/** The root mutation */
["RootMutation"]: {
	__typename: "RootMutation",
	/** The payload for the createBadge mutation */
	createBadge?: GraphQLTypes["CreateBadgePayload"],
	/** The payload for the createCategory mutation */
	createCategory?: GraphQLTypes["CreateCategoryPayload"],
	/** The payload for the createComment mutation */
	createComment?: GraphQLTypes["CreateCommentPayload"],
	/** The payload for the createHero mutation */
	createHero?: GraphQLTypes["CreateHeroPayload"],
	/** The payload for the createMediaItem mutation */
	createMediaItem?: GraphQLTypes["CreateMediaItemPayload"],
	/** The payload for the createMovie mutation */
	createMovie?: GraphQLTypes["CreateMoviePayload"],
	/** The payload for the createPage mutation */
	createPage?: GraphQLTypes["CreatePagePayload"],
	/** The payload for the createPost mutation */
	createPost?: GraphQLTypes["CreatePostPayload"],
	/** The payload for the createPostFormat mutation */
	createPostFormat?: GraphQLTypes["CreatePostFormatPayload"],
	/** The payload for the createTag mutation */
	createTag?: GraphQLTypes["CreateTagPayload"],
	/** The payload for the createUser mutation */
	createUser?: GraphQLTypes["CreateUserPayload"],
	/** The payload for the deleteBadge mutation */
	deleteBadge?: GraphQLTypes["DeleteBadgePayload"],
	/** The payload for the deleteCategory mutation */
	deleteCategory?: GraphQLTypes["DeleteCategoryPayload"],
	/** The payload for the deleteComment mutation */
	deleteComment?: GraphQLTypes["DeleteCommentPayload"],
	/** The payload for the deleteHero mutation */
	deleteHero?: GraphQLTypes["DeleteHeroPayload"],
	/** The payload for the deleteMediaItem mutation */
	deleteMediaItem?: GraphQLTypes["DeleteMediaItemPayload"],
	/** The payload for the deleteMovie mutation */
	deleteMovie?: GraphQLTypes["DeleteMoviePayload"],
	/** The payload for the deletePage mutation */
	deletePage?: GraphQLTypes["DeletePagePayload"],
	/** The payload for the deletePost mutation */
	deletePost?: GraphQLTypes["DeletePostPayload"],
	/** The payload for the deletePostFormat mutation */
	deletePostFormat?: GraphQLTypes["DeletePostFormatPayload"],
	/** The payload for the deleteTag mutation */
	deleteTag?: GraphQLTypes["DeleteTagPayload"],
	/** The payload for the deleteUser mutation */
	deleteUser?: GraphQLTypes["DeleteUserPayload"],
	/** The payload for the generateAuthorizationCode mutation */
	generateAuthorizationCode?: GraphQLTypes["GenerateAuthorizationCodePayload"],
	/** Increase the count. */
	increaseCount?: number,
	/** The payload for the registerUser mutation */
	registerUser?: GraphQLTypes["RegisterUserPayload"],
	/** The payload for the resetUserPassword mutation */
	resetUserPassword?: GraphQLTypes["ResetUserPasswordPayload"],
	/** The payload for the restoreComment mutation */
	restoreComment?: GraphQLTypes["RestoreCommentPayload"],
	/** The payload for the sendPasswordResetEmail mutation */
	sendPasswordResetEmail?: GraphQLTypes["SendPasswordResetEmailPayload"],
	/** The payload for the updateBadge mutation */
	updateBadge?: GraphQLTypes["UpdateBadgePayload"],
	/** The payload for the UpdateCategory mutation */
	updateCategory?: GraphQLTypes["UpdateCategoryPayload"],
	/** The payload for the updateComment mutation */
	updateComment?: GraphQLTypes["UpdateCommentPayload"],
	/** The payload for the updateHero mutation */
	updateHero?: GraphQLTypes["UpdateHeroPayload"],
	/** The payload for the updateMediaItem mutation */
	updateMediaItem?: GraphQLTypes["UpdateMediaItemPayload"],
	/** The payload for the updateMovie mutation */
	updateMovie?: GraphQLTypes["UpdateMoviePayload"],
	/** The payload for the updatePage mutation */
	updatePage?: GraphQLTypes["UpdatePagePayload"],
	/** The payload for the updatePost mutation */
	updatePost?: GraphQLTypes["UpdatePostPayload"],
	/** The payload for the UpdatePostFormat mutation */
	updatePostFormat?: GraphQLTypes["UpdatePostFormatPayload"],
	/** The payload for the updateSettings mutation */
	updateSettings?: GraphQLTypes["UpdateSettingsPayload"],
	/** The payload for the UpdateTag mutation */
	updateTag?: GraphQLTypes["UpdateTagPayload"],
	/** The payload for the updateUser mutation */
	updateUser?: GraphQLTypes["UpdateUserPayload"]
};
	/** Input for the createBadge mutation */
["CreateBadgeInput"]: {
		/** The userId to assign as the author of the object */
	authorId?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The password used to protect the content of the object */
	password?: string,
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** The title of the object */
	title?: string
};
	/** The payload for the createBadge mutation */
["CreateBadgePayload"]: {
	__typename: "CreateBadgePayload",
	/** The Post object mutation type. */
	badge?: GraphQLTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string
};
	/** Input for the createCategory mutation */
["CreateCategoryInput"]: {
		/** The slug that the category will be an alias of */
	aliasOf?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The description of the category object */
	description?: string,
	/** The name of the category object to mutate */
	name: string,
	/** The ID of the category that should be set as the parent */
	parentId?: string,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: string
};
	/** The payload for the createCategory mutation */
["CreateCategoryPayload"]: {
	__typename: "CreateCategoryPayload",
	/** The created category */
	category?: GraphQLTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string
};
	/** Input for the createComment mutation */
["CreateCommentInput"]: {
		/** The approval status of the comment. */
	approved?: string,
	/** The name of the comment's author. */
	author?: string,
	/** The email of the comment's author. */
	authorEmail?: string,
	/** The url of the comment's author. */
	authorUrl?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the post object the comment belongs to. */
	commentOn?: number,
	/** Content of the comment. */
	content?: string,
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** Parent comment of current comment. */
	parent?: string,
	/** Type of comment. */
	type?: string
};
	/** The payload for the createComment mutation */
["CreateCommentPayload"]: {
	__typename: "CreateCommentPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The comment that was created */
	comment?: GraphQLTypes["Comment"],
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?: boolean
};
	/** Input for the createHero mutation */
["CreateHeroInput"]: {
		/** The userId to assign as the author of the object */
	authorId?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The password used to protect the content of the object */
	password?: string,
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** The title of the object */
	title?: string
};
	/** The payload for the createHero mutation */
["CreateHeroPayload"]: {
	__typename: "CreateHeroPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The Post object mutation type. */
	hero?: GraphQLTypes["Hero"]
};
	/** Input for the createMediaItem mutation */
["CreateMediaItemInput"]: {
		/** Alternative text to display when mediaItem is not displayed */
	altText?: string,
	/** The userId to assign as the author of the mediaItem */
	authorId?: string,
	/** The caption for the mediaItem */
	caption?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The comment status for the mediaItem */
	commentStatus?: string,
	/** The date of the mediaItem */
	date?: string,
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?: string,
	/** Description of the mediaItem */
	description?: string,
	/** The file name of the mediaItem */
	filePath?: string,
	/** The file type of the mediaItem */
	fileType?: GraphQLTypes["MimeTypeEnum"],
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId?: string,
	/** The ping status for the mediaItem */
	pingStatus?: string,
	/** The slug of the mediaItem */
	slug?: string,
	/** The status of the mediaItem */
	status?: GraphQLTypes["MediaItemStatusEnum"],
	/** The title of the mediaItem */
	title?: string
};
	/** The status of the media item object. */
["MediaItemStatusEnum"]: MediaItemStatusEnum;
	/** The payload for the createMediaItem mutation */
["CreateMediaItemPayload"]: {
	__typename: "CreateMediaItemPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The MediaItem object mutation type. */
	mediaItem?: GraphQLTypes["MediaItem"]
};
	/** Input for the createMovie mutation */
["CreateMovieInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The content of the object */
	content?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The password used to protect the content of the object */
	password?: string,
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** The title of the object */
	title?: string
};
	/** The payload for the createMovie mutation */
["CreateMoviePayload"]: {
	__typename: "CreateMoviePayload",
	/** The Post object mutation type. */
	movie?: GraphQLTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string
};
	/** Input for the createPage mutation */
["CreatePageInput"]: {
		/** The userId to assign as the author of the object */
	authorId?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The comment status for the object */
	commentStatus?: string,
	/** The content of the object */
	content?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The ID of the parent object */
	parentId?: string,
	/** The password used to protect the content of the object */
	password?: string,
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** The title of the object */
	title?: string
};
	/** The payload for the createPage mutation */
["CreatePagePayload"]: {
	__typename: "CreatePagePayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The Post object mutation type. */
	page?: GraphQLTypes["Page"]
};
	/** Input for the createPost mutation */
["CreatePostInput"]: {
		/** The userId to assign as the author of the object */
	authorId?: string,
	/** Set connections between the post and categories */
	categories?: GraphQLTypes["PostCategoriesInput"],
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The comment status for the object */
	commentStatus?: string,
	/** The content of the object */
	content?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** The excerpt of the object */
	excerpt?: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The password used to protect the content of the object */
	password?: string,
	/** The ping status for the object */
	pingStatus?: string,
	/** URLs that have been pinged. */
	pinged?: Array<string | undefined>,
	/** Set connections between the post and postFormats */
	postFormats?: GraphQLTypes["PostPostFormatsInput"],
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Set connections between the post and tags */
	tags?: GraphQLTypes["PostTagsInput"],
	/** The title of the object */
	title?: string,
	/** URLs queued to be pinged. */
	toPing?: Array<string | undefined>
};
	/** Set relationships between the post to categories */
["PostCategoriesInput"]: {
		/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
	append?: boolean,
	/** The input list of items to set. */
	nodes?: Array<GraphQLTypes["PostCategoriesNodeInput"] | undefined>
};
	/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostCategoriesNodeInput"]: {
		/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
	description?: string,
	/** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
	id?: string,
	/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: string,
	/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: string
};
	/** Set relationships between the post to postFormats */
["PostPostFormatsInput"]: {
		/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
	append?: boolean,
	/** The input list of items to set. */
	nodes?: Array<GraphQLTypes["PostPostFormatsNodeInput"] | undefined>
};
	/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostPostFormatsNodeInput"]: {
		/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
	description?: string,
	/** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
	id?: string,
	/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: string,
	/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: string
};
	/** Set relationships between the post to tags */
["PostTagsInput"]: {
		/** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
	append?: boolean,
	/** The input list of items to set. */
	nodes?: Array<GraphQLTypes["PostTagsNodeInput"] | undefined>
};
	/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
["PostTagsNodeInput"]: {
		/** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
	description?: string,
	/** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
	id?: string,
	/** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
	name?: string,
	/** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
	slug?: string
};
	/** The payload for the createPost mutation */
["CreatePostPayload"]: {
	__typename: "CreatePostPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The Post object mutation type. */
	post?: GraphQLTypes["Post"]
};
	/** Input for the createPostFormat mutation */
["CreatePostFormatInput"]: {
		/** The slug that the post_format will be an alias of */
	aliasOf?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The description of the post_format object */
	description?: string,
	/** The name of the post_format object to mutate */
	name: string,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: string
};
	/** The payload for the createPostFormat mutation */
["CreatePostFormatPayload"]: {
	__typename: "CreatePostFormatPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The created post_format */
	postFormat?: GraphQLTypes["PostFormat"]
};
	/** Input for the createTag mutation */
["CreateTagInput"]: {
		/** The slug that the post_tag will be an alias of */
	aliasOf?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The description of the post_tag object */
	description?: string,
	/** The name of the post_tag object to mutate */
	name: string,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: string
};
	/** The payload for the createTag mutation */
["CreateTagPayload"]: {
	__typename: "CreateTagPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The created post_tag */
	tag?: GraphQLTypes["Tag"]
};
	/** Input for the createUser mutation */
["CreateUserInput"]: {
		/** User's AOL IM account. */
	aim?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** A string containing content about the user. */
	description?: string,
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: string,
	/** A string containing the user's email address. */
	email?: string,
	/** 	The user's first name. */
	firstName?: string,
	/** User's Jabber account. */
	jabber?: string,
	/** The user's last name. */
	lastName?: string,
	/** User's locale. */
	locale?: string,
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: string,
	/** The user's nickname, defaults to the user's username. */
	nickname?: string,
	/** A string that contains the plain text password for the user. */
	password?: string,
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: string,
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: string,
	/** An array of roles to be assigned to the user. */
	roles?: Array<string | undefined>,
	/** A string that contains the user's username for logging in. */
	username: string,
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: string,
	/** User's Yahoo IM account. */
	yim?: string
};
	/** The payload for the createUser mutation */
["CreateUserPayload"]: {
	__typename: "CreateUserPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The User object mutation type. */
	user?: GraphQLTypes["User"]
};
	/** Input for the deleteBadge mutation */
["DeleteBadgeInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: boolean,
	/** The ID of the badge to delete */
	id: string
};
	/** The payload for the deleteBadge mutation */
["DeleteBadgePayload"]: {
	__typename: "DeleteBadgePayload",
	/** The object before it was deleted */
	badge?: GraphQLTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted object */
	deletedId?: string
};
	/** Input for the deleteCategory mutation */
["DeleteCategoryInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the category to delete */
	id: string
};
	/** The payload for the deleteCategory mutation */
["DeleteCategoryPayload"]: {
	__typename: "DeleteCategoryPayload",
	/** The deteted term object */
	category?: GraphQLTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted object */
	deletedId?: string
};
	/** Input for the deleteComment mutation */
["DeleteCommentInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Whether the comment should be force deleted instead of being moved to the trash */
	forceDelete?: boolean,
	/** The deleted comment ID */
	id: string
};
	/** The payload for the deleteComment mutation */
["DeleteCommentPayload"]: {
	__typename: "DeleteCommentPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The deleted comment object */
	comment?: GraphQLTypes["Comment"],
	/** The deleted comment ID */
	deletedId?: string
};
	/** Input for the deleteHero mutation */
["DeleteHeroInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: boolean,
	/** The ID of the hero to delete */
	id: string
};
	/** The payload for the deleteHero mutation */
["DeleteHeroPayload"]: {
	__typename: "DeleteHeroPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted object */
	deletedId?: string,
	/** The object before it was deleted */
	hero?: GraphQLTypes["Hero"]
};
	/** Input for the deleteMediaItem mutation */
["DeleteMediaItemInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Whether the mediaItem should be force deleted instead of being moved to the trash */
	forceDelete?: boolean,
	/** The ID of the mediaItem to delete */
	id: string
};
	/** The payload for the deleteMediaItem mutation */
["DeleteMediaItemPayload"]: {
	__typename: "DeleteMediaItemPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted mediaItem */
	deletedId?: string,
	/** The mediaItem before it was deleted */
	mediaItem?: GraphQLTypes["MediaItem"]
};
	/** Input for the deleteMovie mutation */
["DeleteMovieInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: boolean,
	/** The ID of the Movie to delete */
	id: string
};
	/** The payload for the deleteMovie mutation */
["DeleteMoviePayload"]: {
	__typename: "DeleteMoviePayload",
	/** The object before it was deleted */
	movie?: GraphQLTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted object */
	deletedId?: string
};
	/** Input for the deletePage mutation */
["DeletePageInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: boolean,
	/** The ID of the page to delete */
	id: string
};
	/** The payload for the deletePage mutation */
["DeletePagePayload"]: {
	__typename: "DeletePagePayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted object */
	deletedId?: string,
	/** The object before it was deleted */
	page?: GraphQLTypes["Page"]
};
	/** Input for the deletePost mutation */
["DeletePostInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Whether the object should be force deleted instead of being moved to the trash */
	forceDelete?: boolean,
	/** The ID of the post to delete */
	id: string
};
	/** The payload for the deletePost mutation */
["DeletePostPayload"]: {
	__typename: "DeletePostPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted object */
	deletedId?: string,
	/** The object before it was deleted */
	post?: GraphQLTypes["Post"]
};
	/** Input for the deletePostFormat mutation */
["DeletePostFormatInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the postFormat to delete */
	id: string
};
	/** The payload for the deletePostFormat mutation */
["DeletePostFormatPayload"]: {
	__typename: "DeletePostFormatPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted object */
	deletedId?: string,
	/** The deteted term object */
	postFormat?: GraphQLTypes["PostFormat"]
};
	/** Input for the deleteTag mutation */
["DeleteTagInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the tag to delete */
	id: string
};
	/** The payload for the deleteTag mutation */
["DeleteTagPayload"]: {
	__typename: "DeleteTagPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the deleted object */
	deletedId?: string,
	/** The deteted term object */
	tag?: GraphQLTypes["Tag"]
};
	/** Input for the deleteUser mutation */
["DeleteUserInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the user you want to delete */
	id: string,
	/** Reassign posts and links to new User ID. */
	reassignId?: string
};
	/** The payload for the deleteUser mutation */
["DeleteUserPayload"]: {
	__typename: "DeleteUserPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the user that you just deleted */
	deletedId?: string,
	/** The deleted user object */
	user?: GraphQLTypes["User"]
};
	/** Input for the generateAuthorizationCode mutation */
["GenerateAuthorizationCodeInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Email for WordPress user */
	email?: string,
	/** Password for WordPress user */
	password?: string,
	/** Username for WordPress user */
	username?: string
};
	/** The payload for the generateAuthorizationCode mutation */
["GenerateAuthorizationCodePayload"]: {
	__typename: "GenerateAuthorizationCodePayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Authorization code used for requesting refresh/access tokens */
	code?: string,
	/** Error encountered during user authentication, if any */
	error?: string
};
	/** Input for the registerUser mutation */
["RegisterUserInput"]: {
		/** User's AOL IM account. */
	aim?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** A string containing content about the user. */
	description?: string,
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: string,
	/** A string containing the user's email address. */
	email?: string,
	/** 	The user's first name. */
	firstName?: string,
	/** User's Jabber account. */
	jabber?: string,
	/** The user's last name. */
	lastName?: string,
	/** User's locale. */
	locale?: string,
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: string,
	/** The user's nickname, defaults to the user's username. */
	nickname?: string,
	/** A string that contains the plain text password for the user. */
	password?: string,
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: string,
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: string,
	/** A string that contains the user's username. */
	username: string,
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: string,
	/** User's Yahoo IM account. */
	yim?: string
};
	/** The payload for the registerUser mutation */
["RegisterUserPayload"]: {
	__typename: "RegisterUserPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The User object mutation type. */
	user?: GraphQLTypes["User"]
};
	/** Input for the resetUserPassword mutation */
["ResetUserPasswordInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Password reset key */
	key?: string,
	/** The user's login (username). */
	login?: string,
	/** The new password. */
	password?: string
};
	/** The payload for the resetUserPassword mutation */
["ResetUserPasswordPayload"]: {
	__typename: "ResetUserPasswordPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The User object mutation type. */
	user?: GraphQLTypes["User"]
};
	/** Input for the restoreComment mutation */
["RestoreCommentInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the comment to be restored */
	id: string
};
	/** The payload for the restoreComment mutation */
["RestoreCommentPayload"]: {
	__typename: "RestoreCommentPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The restored comment object */
	comment?: GraphQLTypes["Comment"],
	/** The ID of the restored comment */
	restoredId?: string
};
	/** Input for the sendPasswordResetEmail mutation */
["SendPasswordResetEmailInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** A string that contains the user's username or email address. */
	username: string
};
	/** The payload for the sendPasswordResetEmail mutation */
["SendPasswordResetEmailPayload"]: {
	__typename: "SendPasswordResetEmailPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The user that the password reset email was sent to */
	user?: GraphQLTypes["User"]
};
	/** Input for the updateBadge mutation */
["UpdateBadgeInput"]: {
		/** The userId to assign as the author of the object */
	authorId?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** The ID of the badge object */
	id: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The password used to protect the content of the object */
	password?: string,
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** The title of the object */
	title?: string
};
	/** The payload for the updateBadge mutation */
["UpdateBadgePayload"]: {
	__typename: "UpdateBadgePayload",
	/** The Post object mutation type. */
	badge?: GraphQLTypes["Badge"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string
};
	/** Input for the UpdateCategory mutation */
["UpdateCategoryInput"]: {
		/** The slug that the category will be an alias of */
	aliasOf?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The description of the category object */
	description?: string,
	/** The ID of the category object to update */
	id: string,
	/** The name of the category object to mutate */
	name?: string,
	/** The ID of the category that should be set as the parent */
	parentId?: string,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: string
};
	/** The payload for the UpdateCategory mutation */
["UpdateCategoryPayload"]: {
	__typename: "UpdateCategoryPayload",
	/** The created category */
	category?: GraphQLTypes["Category"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string
};
	/** Input for the updateComment mutation */
["UpdateCommentInput"]: {
		/** The approval status of the comment. */
	approved?: string,
	/** The name of the comment's author. */
	author?: string,
	/** The email of the comment's author. */
	authorEmail?: string,
	/** The url of the comment's author. */
	authorUrl?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The ID of the post object the comment belongs to. */
	commentOn?: number,
	/** Content of the comment. */
	content?: string,
	/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** The ID of the comment being updated. */
	id: string,
	/** Parent comment of current comment. */
	parent?: string,
	/** Type of comment. */
	type?: string
};
	/** The payload for the updateComment mutation */
["UpdateCommentPayload"]: {
	__typename: "UpdateCommentPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The comment that was created */
	comment?: GraphQLTypes["Comment"],
	/** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
	success?: boolean
};
	/** Input for the updateHero mutation */
["UpdateHeroInput"]: {
		/** The userId to assign as the author of the object */
	authorId?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** The ID of the hero object */
	id: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The password used to protect the content of the object */
	password?: string,
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** The title of the object */
	title?: string
};
	/** The payload for the updateHero mutation */
["UpdateHeroPayload"]: {
	__typename: "UpdateHeroPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The Post object mutation type. */
	hero?: GraphQLTypes["Hero"]
};
	/** Input for the updateMediaItem mutation */
["UpdateMediaItemInput"]: {
		/** Alternative text to display when mediaItem is not displayed */
	altText?: string,
	/** The userId to assign as the author of the mediaItem */
	authorId?: string,
	/** The caption for the mediaItem */
	caption?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The comment status for the mediaItem */
	commentStatus?: string,
	/** The date of the mediaItem */
	date?: string,
	/** The date (in GMT zone) of the mediaItem */
	dateGmt?: string,
	/** Description of the mediaItem */
	description?: string,
	/** The file name of the mediaItem */
	filePath?: string,
	/** The file type of the mediaItem */
	fileType?: GraphQLTypes["MimeTypeEnum"],
	/** The ID of the mediaItem object */
	id: string,
	/** The WordPress post ID or the graphQL postId of the parent object */
	parentId?: string,
	/** The ping status for the mediaItem */
	pingStatus?: string,
	/** The slug of the mediaItem */
	slug?: string,
	/** The status of the mediaItem */
	status?: GraphQLTypes["MediaItemStatusEnum"],
	/** The title of the mediaItem */
	title?: string
};
	/** The payload for the updateMediaItem mutation */
["UpdateMediaItemPayload"]: {
	__typename: "UpdateMediaItemPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The MediaItem object mutation type. */
	mediaItem?: GraphQLTypes["MediaItem"]
};
	/** Input for the updateMovie mutation */
["UpdateMovieInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The content of the object */
	content?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** The ID of the Movie object */
	id: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The password used to protect the content of the object */
	password?: string,
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** The title of the object */
	title?: string
};
	/** The payload for the updateMovie mutation */
["UpdateMoviePayload"]: {
	__typename: "UpdateMoviePayload",
	/** The Post object mutation type. */
	movie?: GraphQLTypes["Movie"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string
};
	/** Input for the updatePage mutation */
["UpdatePageInput"]: {
		/** The userId to assign as the author of the object */
	authorId?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The comment status for the object */
	commentStatus?: string,
	/** The content of the object */
	content?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** The ID of the page object */
	id: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The ID of the parent object */
	parentId?: string,
	/** The password used to protect the content of the object */
	password?: string,
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** The title of the object */
	title?: string
};
	/** The payload for the updatePage mutation */
["UpdatePagePayload"]: {
	__typename: "UpdatePagePayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The Post object mutation type. */
	page?: GraphQLTypes["Page"]
};
	/** Input for the updatePost mutation */
["UpdatePostInput"]: {
		/** The userId to assign as the author of the object */
	authorId?: string,
	/** Set connections between the post and categories */
	categories?: GraphQLTypes["PostCategoriesInput"],
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The comment status for the object */
	commentStatus?: string,
	/** The content of the object */
	content?: string,
	/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
	date?: string,
	/** The excerpt of the object */
	excerpt?: string,
	/** The ID of the post object */
	id: string,
	/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
	menuOrder?: number,
	/** The password used to protect the content of the object */
	password?: string,
	/** The ping status for the object */
	pingStatus?: string,
	/** URLs that have been pinged. */
	pinged?: Array<string | undefined>,
	/** Set connections between the post and postFormats */
	postFormats?: GraphQLTypes["PostPostFormatsInput"],
	/** The slug of the object */
	slug?: string,
	/** The status of the object */
	status?: GraphQLTypes["PostStatusEnum"],
	/** Set connections between the post and tags */
	tags?: GraphQLTypes["PostTagsInput"],
	/** The title of the object */
	title?: string,
	/** URLs queued to be pinged. */
	toPing?: Array<string | undefined>
};
	/** The payload for the updatePost mutation */
["UpdatePostPayload"]: {
	__typename: "UpdatePostPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The Post object mutation type. */
	post?: GraphQLTypes["Post"]
};
	/** Input for the UpdatePostFormat mutation */
["UpdatePostFormatInput"]: {
		/** The slug that the post_format will be an alias of */
	aliasOf?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The description of the post_format object */
	description?: string,
	/** The ID of the postFormat object to update */
	id: string,
	/** The name of the post_format object to mutate */
	name?: string,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: string
};
	/** The payload for the UpdatePostFormat mutation */
["UpdatePostFormatPayload"]: {
	__typename: "UpdatePostFormatPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The created post_format */
	postFormat?: GraphQLTypes["PostFormat"]
};
	/** Input for the updateSettings mutation */
["UpdateSettingsInput"]: {
		/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Allow people to submit comments on new posts. */
	discussionSettingsDefaultCommentStatus?: string,
	/** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
	discussionSettingsDefaultPingStatus?: string,
	/** A date format for all date strings. */
	generalSettingsDateFormat?: string,
	/** Site tagline. */
	generalSettingsDescription?: string,
	/** This address is used for admin purposes, like new user notification. */
	generalSettingsEmail?: string,
	/** WordPress locale code. */
	generalSettingsLanguage?: string,
	/** A day number of the week that the week should start on. */
	generalSettingsStartOfWeek?: number,
	/** A time format for all time strings. */
	generalSettingsTimeFormat?: string,
	/** A city in the same timezone as you. */
	generalSettingsTimezone?: string,
	/** Site title. */
	generalSettingsTitle?: string,
	/** Site URL. */
	generalSettingsUrl?: string,
	/** Blog pages show at most. */
	readingSettingsPostsPerPage?: number,
	/** Default post category. */
	writingSettingsDefaultCategory?: number,
	/** Default post format. */
	writingSettingsDefaultPostFormat?: string,
	/** Convert emoticons like :-) and :-P to graphics on display. */
	writingSettingsUseSmilies?: boolean
};
	/** The payload for the updateSettings mutation */
["UpdateSettingsPayload"]: {
	__typename: "UpdateSettingsPayload",
	/** Update all settings. */
	allSettings?: GraphQLTypes["Settings"],
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** Update the discussion setting. */
	discussionSettings?: GraphQLTypes["DiscussionSettings"],
	/** Update the general setting. */
	generalSettings?: GraphQLTypes["GeneralSettings"],
	/** Update the reading setting. */
	readingSettings?: GraphQLTypes["ReadingSettings"],
	/** Update the writing setting. */
	writingSettings?: GraphQLTypes["WritingSettings"]
};
	/** Input for the UpdateTag mutation */
["UpdateTagInput"]: {
		/** The slug that the post_tag will be an alias of */
	aliasOf?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The description of the post_tag object */
	description?: string,
	/** The ID of the tag object to update */
	id: string,
	/** The name of the post_tag object to mutate */
	name?: string,
	/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
	slug?: string
};
	/** The payload for the UpdateTag mutation */
["UpdateTagPayload"]: {
	__typename: "UpdateTagPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The created post_tag */
	tag?: GraphQLTypes["Tag"]
};
	/** Input for the updateUser mutation */
["UpdateUserInput"]: {
		/** User's AOL IM account. */
	aim?: string,
	/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** A string containing content about the user. */
	description?: string,
	/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
	displayName?: string,
	/** A string containing the user's email address. */
	email?: string,
	/** 	The user's first name. */
	firstName?: string,
	/** The ID of the user */
	id: string,
	/** User's Jabber account. */
	jabber?: string,
	/** The user's last name. */
	lastName?: string,
	/** User's locale. */
	locale?: string,
	/** A string that contains a URL-friendly name for the user. The default is the user's username. */
	nicename?: string,
	/** The user's nickname, defaults to the user's username. */
	nickname?: string,
	/** A string that contains the plain text password for the user. */
	password?: string,
	/** The date the user registered. Format is Y-m-d H:i:s. */
	registered?: string,
	/** A string for whether to enable the rich editor or not. False if not empty. */
	richEditing?: string,
	/** An array of roles to be assigned to the user. */
	roles?: Array<string | undefined>,
	/** A string containing the user's URL for the user's web site. */
	websiteUrl?: string,
	/** User's Yahoo IM account. */
	yim?: string
};
	/** The payload for the updateUser mutation */
["UpdateUserPayload"]: {
	__typename: "UpdateUserPayload",
	/** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
	clientMutationId?: string,
	/** The User object mutation type. */
	user?: GraphQLTypes["User"]
};
	/** A Comment Author object */
["CommentAuthor"]: {
	__typename: "CommentAuthor",
	/** Identifies the primary key from the database. */
	databaseId: number,
	/** The email for the comment author */
	email?: string,
	/** The globally unique identifier for the comment author object */
	id: string,
	/** Whether the object is restricted from the current viewer */
	isRestricted?: boolean,
	/** The name for the comment author. */
	name?: string,
	/** The url the comment author. */
	url?: string
};
	/** The template assigned to the node */
["DefaultTemplate"]: {
	__typename: "DefaultTemplate",
	/** The name of the template */
	templateName?: string
};
	/** The template assigned to the node */
["CoverTemplate"]: {
	__typename: "CoverTemplate",
	/** The name of the template */
	templateName?: string
};
	/** The template assigned to the node */
["FullWidthTemplate"]: {
	__typename: "FullWidthTemplate",
	/** The name of the template */
	templateName?: string
}
    }
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum BadgeIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	SLUG = "SLUG",
	URI = "URI"
}
/** Allowed Content Types */
export const enum ContentTypeEnum {
	ATTACHMENT = "ATTACHMENT",
	BADGE = "BADGE",
	HERO = "HERO",
	MOVIE = "MOVIE",
	PAGE = "PAGE",
	POST = "POST"
}
/** The column to use when filtering by date */
export const enum PostObjectsConnectionDateColumnEnum {
	DATE = "DATE",
	MODIFIED = "MODIFIED"
}
/** The logical relation between each item in the array when there are more than one. */
export const enum RelationEnum {
	AND = "AND",
	OR = "OR"
}
/** The MimeType of the object */
export const enum MimeTypeEnum {
	APPLICATION_JAVA = "APPLICATION_JAVA",
	APPLICATION_MSWORD = "APPLICATION_MSWORD",
	APPLICATION_OCTET_STREAM = "APPLICATION_OCTET_STREAM",
	APPLICATION_ONENOTE = "APPLICATION_ONENOTE",
	APPLICATION_OXPS = "APPLICATION_OXPS",
	APPLICATION_PDF = "APPLICATION_PDF",
	APPLICATION_RAR = "APPLICATION_RAR",
	APPLICATION_RTF = "APPLICATION_RTF",
	APPLICATION_TTAF_XML = "APPLICATION_TTAF_XML",
	APPLICATION_VND_APPLE_KEYNOTE = "APPLICATION_VND_APPLE_KEYNOTE",
	APPLICATION_VND_APPLE_NUMBERS = "APPLICATION_VND_APPLE_NUMBERS",
	APPLICATION_VND_APPLE_PAGES = "APPLICATION_VND_APPLE_PAGES",
	APPLICATION_VND_MS_ACCESS = "APPLICATION_VND_MS_ACCESS",
	APPLICATION_VND_MS_EXCEL = "APPLICATION_VND_MS_EXCEL",
	APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12 = "APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12",
	APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12 = "APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12",
	APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12 = "APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12",
	APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12 = "APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12",
	APPLICATION_VND_MS_POWERPOINT = "APPLICATION_VND_MS_POWERPOINT",
	APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12 = "APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12",
	APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12 = "APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12",
	APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12 = "APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12",
	APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12 = "APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12",
	APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12 = "APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12",
	APPLICATION_VND_MS_PROJECT = "APPLICATION_VND_MS_PROJECT",
	APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12 = "APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12",
	APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12 = "APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12",
	APPLICATION_VND_MS_WRITE = "APPLICATION_VND_MS_WRITE",
	APPLICATION_VND_MS_XPSDOCUMENT = "APPLICATION_VND_MS_XPSDOCUMENT",
	APPLICATION_VND_OASIS_OPENDOCUMENT_CHART = "APPLICATION_VND_OASIS_OPENDOCUMENT_CHART",
	APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE = "APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE",
	APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA = "APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA",
	APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS = "APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS",
	APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION = "APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION",
	APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET = "APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET",
	APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT = "APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT",
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION",
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE",
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW",
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE",
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET",
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE",
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT",
	APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE = "APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE",
	APPLICATION_WORDPERFECT = "APPLICATION_WORDPERFECT",
	APPLICATION_X_7Z_COMPRESSED = "APPLICATION_X_7Z_COMPRESSED",
	APPLICATION_X_GZIP = "APPLICATION_X_GZIP",
	APPLICATION_X_TAR = "APPLICATION_X_TAR",
	APPLICATION_ZIP = "APPLICATION_ZIP",
	AUDIO_AAC = "AUDIO_AAC",
	AUDIO_FLAC = "AUDIO_FLAC",
	AUDIO_MIDI = "AUDIO_MIDI",
	AUDIO_MPEG = "AUDIO_MPEG",
	AUDIO_OGG = "AUDIO_OGG",
	AUDIO_WAV = "AUDIO_WAV",
	AUDIO_X_MATROSKA = "AUDIO_X_MATROSKA",
	AUDIO_X_MS_WAX = "AUDIO_X_MS_WAX",
	AUDIO_X_MS_WMA = "AUDIO_X_MS_WMA",
	AUDIO_X_REALAUDIO = "AUDIO_X_REALAUDIO",
	IMAGE_BMP = "IMAGE_BMP",
	IMAGE_GIF = "IMAGE_GIF",
	IMAGE_HEIC = "IMAGE_HEIC",
	IMAGE_JPEG = "IMAGE_JPEG",
	IMAGE_PNG = "IMAGE_PNG",
	IMAGE_TIFF = "IMAGE_TIFF",
	IMAGE_WEBP = "IMAGE_WEBP",
	IMAGE_X_ICON = "IMAGE_X_ICON",
	TEXT_CALENDAR = "TEXT_CALENDAR",
	TEXT_CSS = "TEXT_CSS",
	TEXT_CSV = "TEXT_CSV",
	TEXT_PLAIN = "TEXT_PLAIN",
	TEXT_RICHTEXT = "TEXT_RICHTEXT",
	TEXT_TAB_SEPARATED_VALUES = "TEXT_TAB_SEPARATED_VALUES",
	TEXT_VTT = "TEXT_VTT",
	VIDEO_3GPP = "VIDEO_3GPP",
	VIDEO_3GPP2 = "VIDEO_3GPP2",
	VIDEO_AVI = "VIDEO_AVI",
	VIDEO_DIVX = "VIDEO_DIVX",
	VIDEO_MP4 = "VIDEO_MP4",
	VIDEO_MPEG = "VIDEO_MPEG",
	VIDEO_OGG = "VIDEO_OGG",
	VIDEO_QUICKTIME = "VIDEO_QUICKTIME",
	VIDEO_WEBM = "VIDEO_WEBM",
	VIDEO_X_FLV = "VIDEO_X_FLV",
	VIDEO_X_MATROSKA = "VIDEO_X_MATROSKA",
	VIDEO_X_MS_ASF = "VIDEO_X_MS_ASF",
	VIDEO_X_MS_WM = "VIDEO_X_MS_WM",
	VIDEO_X_MS_WMV = "VIDEO_X_MS_WMV",
	VIDEO_X_MS_WMX = "VIDEO_X_MS_WMX"
}
/** Field to order the connection by */
export const enum PostObjectsConnectionOrderbyEnum {
	AUTHOR = "AUTHOR",
	COMMENT_COUNT = "COMMENT_COUNT",
	DATE = "DATE",
	IN = "IN",
	MENU_ORDER = "MENU_ORDER",
	MODIFIED = "MODIFIED",
	NAME_IN = "NAME_IN",
	PARENT = "PARENT",
	SLUG = "SLUG",
	TITLE = "TITLE"
}
/** The cardinality of the connection order */
export const enum OrderEnum {
	ASC = "ASC",
	DESC = "DESC"
}
/** The status of the object. */
export const enum PostStatusEnum {
	AUTO_DRAFT = "AUTO_DRAFT",
	DRAFT = "DRAFT",
	FUTURE = "FUTURE",
	INHERIT = "INHERIT",
	PENDING = "PENDING",
	PRIVATE = "PRIVATE",
	PUBLISH = "PUBLISH",
	REQUEST_COMPLETED = "REQUEST_COMPLETED",
	REQUEST_CONFIRMED = "REQUEST_CONFIRMED",
	REQUEST_FAILED = "REQUEST_FAILED",
	REQUEST_PENDING = "REQUEST_PENDING",
	TRASH = "TRASH"
}
/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export const enum AvatarRatingEnum {
	G = "G",
	PG = "PG",
	R = "R",
	X = "X"
}
/** Options for ordering the connection */
export const enum CommentsConnectionOrderbyEnum {
	COMMENT_AGENT = "COMMENT_AGENT",
	COMMENT_APPROVED = "COMMENT_APPROVED",
	COMMENT_AUTHOR = "COMMENT_AUTHOR",
	COMMENT_AUTHOR_EMAIL = "COMMENT_AUTHOR_EMAIL",
	COMMENT_AUTHOR_IP = "COMMENT_AUTHOR_IP",
	COMMENT_AUTHOR_URL = "COMMENT_AUTHOR_URL",
	COMMENT_CONTENT = "COMMENT_CONTENT",
	COMMENT_DATE = "COMMENT_DATE",
	COMMENT_DATE_GMT = "COMMENT_DATE_GMT",
	COMMENT_ID = "COMMENT_ID",
	COMMENT_IN = "COMMENT_IN",
	COMMENT_KARMA = "COMMENT_KARMA",
	COMMENT_PARENT = "COMMENT_PARENT",
	COMMENT_POST_ID = "COMMENT_POST_ID",
	COMMENT_TYPE = "COMMENT_TYPE",
	USER_ID = "USER_ID"
}
/** The format of post field data. */
export const enum PostObjectFieldFormatEnum {
	RAW = "RAW",
	RENDERED = "RENDERED"
}
/** The size of the media item object. */
export const enum MediaItemSizeEnum {
	LARGE = "LARGE",
	MEDIUM = "MEDIUM",
	MEDIUM_LARGE = "MEDIUM_LARGE",
	POST_THUMBNAIL = "POST_THUMBNAIL",
	THUMBNAIL = "THUMBNAIL",
	TWENTYTWENTY_FULLSCREEN = "TWENTYTWENTY_FULLSCREEN",
	_1536X1536 = "_1536X1536",
	_2048X2048 = "_2048X2048"
}
/** Options for ordering the connection by */
export const enum TermObjectsConnectionOrderbyEnum {
	COUNT = "COUNT",
	DESCRIPTION = "DESCRIPTION",
	NAME = "NAME",
	SLUG = "SLUG",
	TERM_GROUP = "TERM_GROUP",
	TERM_ID = "TERM_ID",
	TERM_ORDER = "TERM_ORDER"
}
/** Allowed Content Types of the Category taxonomy. */
export const enum ContentTypesOfCategoryEnum {
	POST = "POST"
}
/** Allowed Content Types of the PostFormat taxonomy. */
export const enum ContentTypesOfPostFormatEnum {
	POST = "POST"
}
/** Allowed Content Types of the Tag taxonomy. */
export const enum ContentTypesOfTagEnum {
	POST = "POST"
}
/** Allowed taxonomies */
export const enum TaxonomyEnum {
	CATEGORY = "CATEGORY",
	POSTFORMAT = "POSTFORMAT",
	TAG = "TAG"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum CategoryIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	NAME = "NAME",
	SLUG = "SLUG",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum ContentNodeIdTypeEnum {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export const enum ContentTypeIdTypeEnum {
	ID = "ID",
	NAME = "NAME"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum HeroIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	SLUG = "SLUG",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum MediaItemIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	SLUG = "SLUG",
	SOURCE_URL = "SOURCE_URL",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export const enum MenuNodeIdTypeEnum {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	NAME = "NAME"
}
/** Registered menu locations */
export const enum MenuLocationEnum {
	EXPANDED = "EXPANDED",
	FOOTER = "FOOTER",
	MOBILE = "MOBILE",
	PRIMARY = "PRIMARY",
	SOCIAL = "SOCIAL"
}
/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export const enum MenuItemNodeIdTypeEnum {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum MovieIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	SLUG = "SLUG",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum PageIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum PostIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	SLUG = "SLUG",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum PostFormatIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	NAME = "NAME",
	SLUG = "SLUG",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single resource. Default is ID. */
export const enum TagIdType {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	NAME = "NAME",
	SLUG = "SLUG",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export const enum TaxonomyIdTypeEnum {
	ID = "ID",
	NAME = "NAME"
}
/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export const enum TermNodeIdTypeEnum {
	DATABASE_ID = "DATABASE_ID",
	ID = "ID",
	NAME = "NAME",
	SLUG = "SLUG",
	URI = "URI"
}
/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export const enum UserNodeIdTypeEnum {
	DATABASE_ID = "DATABASE_ID",
	EMAIL = "EMAIL",
	ID = "ID",
	SLUG = "SLUG",
	URI = "URI",
	USERNAME = "USERNAME"
}
/** Field to order the connection by */
export const enum UsersConnectionOrderbyEnum {
	DISPLAY_NAME = "DISPLAY_NAME",
	EMAIL = "EMAIL",
	LOGIN = "LOGIN",
	LOGIN_IN = "LOGIN_IN",
	NICE_NAME = "NICE_NAME",
	NICE_NAME_IN = "NICE_NAME_IN",
	REGISTERED = "REGISTERED",
	URL = "URL"
}
/** Names of available user roles */
export const enum UserRoleEnum {
	ADMINISTRATOR = "ADMINISTRATOR",
	AUTHOR = "AUTHOR",
	CONTRIBUTOR = "CONTRIBUTOR",
	EDITOR = "EDITOR",
	SUBSCRIBER = "SUBSCRIBER"
}
/** Column used for searching for users. */
export const enum UsersConnectionSearchColumnEnum {
	EMAIL = "EMAIL",
	ID = "ID",
	LOGIN = "LOGIN",
	NICENAME = "NICENAME",
	URL = "URL"
}
/** The status of the media item object. */
export const enum MediaItemStatusEnum {
	AUTO_DRAFT = "AUTO_DRAFT",
	INHERIT = "INHERIT",
	PRIVATE = "PRIVATE",
	TRASH = "TRASH"
}
export class GraphQLError extends Error {
    constructor(public response: GraphQLResponse) {
      super("");
      console.error(response);
    }
    toString() {
      return "GraphQL Response Error";
    }
  }


export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: boolean;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R> ? InputType<R, U>[] : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends ZEUS_INTERFACES | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends '__union' & infer R
        ? P extends keyof DST
          ? IsArray<R, '__typename' extends keyof DST ? DST[P] & { __typename: true } : DST[P]>
          : {}
        : never;
    }[keyof DST] &
      {
        [P in keyof Omit<
          Pick<
            SRC,
            {
              [P in keyof DST]: SRC[P] extends '__union' & infer R ? never : P;
            }[keyof DST]
          >,
          '__typename'
        >]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
      }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends boolean ? SRC[P] : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST> ? IsInterfaced<SRC, DST> : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } &
      MapType<SRC, Omit<IsPayLoad<DST>, '__alias'>>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any> ? P : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type SubscriptionToGraphQL<Z, T> = {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (fn: (e: { data?: InputType<T, Z>; code?: number; reason?: string; message?: string }) => void) => void;
  error: (fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & {websocket?: websocketOptions}]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>,
) => Promise<any>;
export type SubscriptionFunction = (query: string) => any;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<F extends [infer ARGS, any] ? ARGS : undefined>;



export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case 'String':
      return  `${JSON.stringify(value)}`;
    case 'Int':
      return `${value}`;
    case 'Float':
      return `${value}`;
    case 'Boolean':
      return `${value}`;
    case 'ID':
      return `"${value}"`;
    case 'enum':
      return `${value}`;
    case 'scalar':
      return `${value}`;
    default:
      return false;
  }
};


export const TypesPropsResolver = ({
    value,
    type,
    name,
    key,
    blockArrays
}: {
    value: any;
    type: string;
    name: string;
    key?: string;
    blockArrays?: boolean;
}): string => {
    if (value === null) {
        return `null`;
    }
    let resolvedValue = AllTypesProps[type][name];
    if (key) {
        resolvedValue = resolvedValue[key];
    }
    if (!resolvedValue) {
        throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ''}`)
    }
    const typeResolved = resolvedValue.type;
    const isArray = resolvedValue.array;
    const isArrayRequired = resolvedValue.arrayRequired;
    if (typeof value === 'string' && value.startsWith(`ZEUS_VAR$`)) {
        const isRequired = resolvedValue.required ? '!' : '';
        let t = `${typeResolved}`;
        if (isArray) {
          if (isRequired) {
              t = `${t}!`;
          }
          t = `[${t}]`;
          if(isArrayRequired){
            t = `${t}!`;
          }
        }else{
          if (isRequired) {
                t = `${t}!`;
          }
        }
        return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
    }
    if (isArray && !blockArrays) {
        return `[${value
        .map((v: any) => TypesPropsResolver({ value: v, type, name, key, blockArrays: true }))
        .join(',')}]`;
    }
    const reslovedScalar = ScalarResolver(typeResolved, value);
    if (!reslovedScalar) {
        const resolvedType = AllTypesProps[typeResolved];
        if (typeof resolvedType === 'object') {
        const argsKeys = Object.keys(resolvedType);
        return `{${argsKeys
            .filter((ak) => value[ak] !== undefined)
            .map(
            (ak) => `${ak}:${TypesPropsResolver({ value: value[ak], type: typeResolved, name: ak })}`
            )}}`;
        }
        return ScalarResolver(AllTypesProps[typeResolved], value) as string;
    }
    return reslovedScalar;
};


const isArrayFunction = (
  parent: string[],
  a: any[]
) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter((k) => typeof values[k] !== 'undefined');

  if (!keys.length) {
      return keyValues.length > 0
        ? `(${keyValues
            .map(
              (v) =>
                `${v}:${TypesPropsResolver({
                  value: values[v],
                  type: mainKey,
                  name: key,
                  key: v
                })}`
            )
            .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
        : traverseToSeekArrays(parent, r);
    }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(',')})${r ? traverseToSeekArrays(parent, r) : ''}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};


const resolveKV = (k: string, v: boolean | string | { [x: string]: boolean | string }) =>
  typeof v === 'boolean' ? k : typeof v === 'object' ? `${k}{${objectToTree(v)}}` : `${k}${v}`;


const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o).map((k) => `${resolveKV(k, o[k])}`).join(' ')}}`;


const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return '';
  if (Object.keys(a).length === 0) {
    return '';
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === 'object') {
      Object.keys(a)
        .filter((k) => typeof a[k] !== 'undefined')
        .forEach((k) => {
        if (k === '__alias') {
          Object.keys(a[k]).forEach((aliasKey) => {
            const aliasOperations = a[k][aliasKey];
            const aliasOperationName = Object.keys(aliasOperations)[0];
            const aliasOperation = aliasOperations[aliasOperationName];
            b[
              `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
            ] = traverseToSeekArrays([...parent, aliasOperationName], aliasOperation);
          });
        } else {
          b[k] = traverseToSeekArrays([...parent, k], a[k]);
        }
      });
    } else {
      return '';
    }
  }
  return objectToTree(b);
};  


const buildQuery = (type: string, a?: Record<any, any>) => 
  traverseToSeekArrays([type], a);


const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(variable, variable.split('__ZEUS_VAR__')[0]);
    }
  });
  return `(${AllVariables.map((a) => a.split('__ZEUS_VAR__'))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(', ')})${filteredQuery}`;
};


export const queryConstruct = (t: 'query' | 'mutation' | 'subscription', tName: string, operationName?: string) => (o: Record<any, any>) =>
  `${t.toLowerCase()}${operationName ? ' ' + operationName : ''}${inspectVariables(buildQuery(tName, o))}`;
  

export const fullChainConstruct = (fn: FetchFunction) => (t: 'query' | 'mutation' | 'subscription', tName: string) => (
  o: Record<any, any>,
  options?: OperationOptions,
) => fn(queryConstruct(t, tName, options?.operationName)(o), options?.variables).then((r:any) => { 
  seekForAliases(r)
  return r
});


export const fullSubscriptionConstruct = (fn: SubscriptionFunction) => (
  t: 'query' | 'mutation' | 'subscription',
  tName: string,
) => (o: Record<any, any>, options?: OperationOptions) =>
  fn(queryConstruct(t, tName, options?.operationName)(o));


const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === 'object') {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === 'object' && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf('__alias__') !== -1) {
        const [operation, alias] = k.split('__alias__');
        response[alias] = {
          [operation]: value,
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};


export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join('')}`;


export const resolverFor = <
  X,
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
>(
  type: T,
  field: Z,
  fn: (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any,
  ) => Z extends keyof ModelTypes[T] ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]> | X : any,
) => fn as (args?: any,source?: any) => any;


const handleFetchResponse = (
  response: Parameters<Extract<Parameters<ReturnType<typeof fetch>['then']>[0], Function>>[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response.text().then(text => {
        try { reject(JSON.parse(text)); }
        catch (err) { reject(text); }
      }).catch(reject);
    });
  }
  return response.json();
};

export const apiFetch = (options: fetchOptions) => (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === 'GET') {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };
  

export const apiSubscription = (options: chainOptions) => (
    query: string,
  ) => {
    try {
      const queryString = options[0] + '?query=' + encodeURIComponent(query);
      const wsString = queryString.replace('http', 'ws');
      const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
      const webSocketOptions = options[1]?.websocket || [host];
      const ws = new WebSocket(...webSocketOptions);
      return {
        ws,
        on: (e: (args: any) => void) => {
          ws.onmessage = (event:any) => {
            if(event.data){
              const parsed = JSON.parse(event.data)
              const data = parsed.data
              if (data) {
                seekForAliases(data);
              }
              return e(data);
            }
          };
        },
        off: (e: (args: any) => void) => {
          ws.onclose = e;
        },
        error: (e: (args: any) => void) => {
          ws.onerror = e;
        },
        open: (e: () => void) => {
          ws.onopen = e;
        },
      };
    } catch {
      throw new Error('No websockets implemented');
    }
  };



const allOperations = {
    "query": "RootQuery",
    "mutation": "RootMutation"
}

export type GenericOperation<O> = O extends 'query'
  ? "RootQuery"
  : O extends 'mutation'
  ? "RootMutation"
  : never

export const Thunder = (fn: FetchFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(o: Z | ValueTypes[R], ops?: OperationOptions) =>
  fullChainConstruct(fn)(operation, allOperations[operation])(o as any, ops) as Promise<InputType<GraphQLTypes[R], Z>>;

export const Chain = (...options: chainOptions) => Thunder(apiFetch(options));  
  
export const SubscriptionThunder = (fn: SubscriptionFunction) => <
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
) => <Z extends ValueTypes[R]>(
  o: Z | ValueTypes[R],
  ops?: OperationOptions
)=>
  fullSubscriptionConstruct(fn)(operation, allOperations[operation])(
    o as any,
    ops,
  ) as SubscriptionToGraphQL<Z, GraphQLTypes[R]>;

export const Subscription = (...options: chainOptions) => SubscriptionThunder(apiSubscription(options));
export const Zeus = <
  Z extends ValueTypes[R],
  O extends 'query' | 'mutation',
  R extends keyof ValueTypes = GenericOperation<O>
>(
  operation: O,
  o: Z | ValueTypes[R],
  operationName?: string,
) => queryConstruct(operation, allOperations[operation], operationName)(o as any);
export const Selector = <T extends keyof ValueTypes>(key: T) => ZeusSelect<ValueTypes[T]>();
  

export const Gql = Chain('http://localhost:10003/graphql')