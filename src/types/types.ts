export interface TypeNameRepositorio {
  name: string;
}

export interface TypeRepositorio extends TypeNameRepositorio {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  deployments_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_discussions: boolean;
  forks_count: number;
  mirror_url: string | null;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  allow_forking: boolean;
  is_template: boolean;
  web_commit_signoff_required: boolean;
  topics: string[];
  visibility: string;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
  temp_clone_token: string | null;
  organization: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  };
  network_count: number;
  subscribers_count: number;
}

const prevIssue = {
  url: "https://api.github.com/repos/angular/angular/issues/50168",
  repository_url: "https://api.github.com/repos/angular/angular",
  labels_url:
    "https://api.github.com/repos/angular/angular/issues/50168/labels{/name}",
  comments_url:
    "https://api.github.com/repos/angular/angular/issues/50168/comments",
  events_url:
    "https://api.github.com/repos/angular/angular/issues/50168/events",
  html_url: "https://github.com/angular/angular/issues/50168",
  id: 1697980637,
  node_id: "I_kwDOAXExC85lNSDd",
  number: 50168,
  title:
    "Input properties cannot be unset when using exactOptionalPropertyTypes",
  user: {
    login: "dechamps",
    id: 866859,
    node_id: "MDQ6VXNlcjg2Njg1OQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/866859?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dechamps",
    html_url: "https://github.com/dechamps",
    followers_url: "https://api.github.com/users/dechamps/followers",
    following_url:
      "https://api.github.com/users/dechamps/following{/other_user}",
    gists_url: "https://api.github.com/users/dechamps/gists{/gist_id}",
    starred_url: "https://api.github.com/users/dechamps/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/dechamps/subscriptions",
    organizations_url: "https://api.github.com/users/dechamps/orgs",
    repos_url: "https://api.github.com/users/dechamps/repos",
    events_url: "https://api.github.com/users/dechamps/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/dechamps/received_events",
    type: "User",
    site_admin: false,
  },
  labels: [{ id: 1, name: "aaa" }],
  state: "open",
  locked: false,
  assignee: null,
  assignees: [],
  milestone: null,
  comments: 0,
  created_at: "2023-05-05T17:53:15Z",
  updated_at: "2023-05-05T17:54:03Z",
  closed_at: null,
  author_association: "NONE",
  active_lock_reason: null,
  body: "### Which @angular/* package(s) are the source of the bug?\r\n\r\ncore\r\n\r\n### Is this a regression?\r\n\r\nNo\r\n\r\n### Description\r\n\r\nIf the `exactOptionalPropertyTypes` TS config option is set, then it becomes impossible to unset an input property through a binding (or at least not without working around the TS type system).\r\n\r\nFor example, given the following:\r\n\r\n```ts\r\n@Component({\r\n  selector: 'child-component',\r\n})\r\nclass ChildComponent {\r\n  @Input() someProperty?: string;\r\n}\r\n\r\n@Component({\r\n    template: `<child-component [someProperty]=\"someValue\"></child-component>`,\r\n})\r\nclass ParentComponent {\r\n  someValue?: string;\r\n}\r\n```\r\n\r\nIf the `exactOptionalPropertyTypes` TS config option is set, the above will fail to compile with `error TS2412: Type 'string | undefined' is not assignable to type 'string' with 'exactOptionalPropertyTypes: true'`.\r\n\r\nOne random example (out of many, I'd presume) where this becomes a real problem is when attempting to clear the `fragment` property of a [`routerLink` directive](https://angular.io/api/router/RouterLink). There is no clean way to do this (that I know of) if `exactOptionalPropertyTypes` is enabled. (Setting the property to the empty string is not equivalent, as that will still result in a spurious `#` character being added to the href.) The below reproducer demonstrates this particular problem.\r\n\r\nThe only way out of this is to work around the type system by [coercing the value to non-null](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#non-null-assertion-operator-postfix-):\r\n\r\n```html\r\n<child-component [someProperty]=\"someValue!\"></child-component>\r\n```\r\n\r\nBut note that [this is still not quite correct](https://stackoverflow.com/questions/14967535/delete-a-x-vs-a-x-undefined), as it results in the property being set to `undefined`, as opposed to being unset (in the `delete` operator sense) - and in fact this is precisely the mistake `exactOptionalPropertyTypes` is designed to prevent. Fortunately most child components won't care as they typically don't make the distinction between an absent property and one that is set to `undefined`.\r\n\r\n### Please provide a link to a minimal reproduction of the bug\r\n\r\nhttps://codesandbox.io/p/sandbox/angular-router-fragment-uo79rv\r\n\r\n### Please provide the exception or error you saw\r\n\r\n```\r\nError: src/app/app.component.html:12:23 - error TS2412: Type 'string | undefined' is not assignable to type 'string' with 'exactOptionalPropertyTypes: true'. Consider adding 'undefined' to the type of the target.\r\n  Type 'undefined' is not assignable to type 'string'.\r\n```\r\n\r\n\r\n### Please provide the environment you discovered this bug in (run `ng version`)\r\n\r\n```\r\nngular CLI: 15.2.1\r\nNode: 16.17.0\r\nPackage Manager: npm 8.15.0\r\nOS: linux x64\r\n\r\nAngular: 15.2.1\r\n... animations, cli, common, compiler, compiler-cli, core, forms\r\n... language-service, platform-browser, platform-browser-dynamic\r\n... router\r\n\r\nPackage                         Version\r\n---------------------------------------------------------\r\n@angular-devkit/architect       0.1502.1\r\n@angular-devkit/build-angular   15.2.1\r\n@angular-devkit/core            15.2.1\r\n@angular-devkit/schematics      15.2.1\r\n@schematics/angular             15.2.1\r\nrxjs                            7.6.0\r\ntypescript                      4.8.2\r\n```",
  reactions: {
    url: "https://api.github.com/repos/angular/angular/issues/50168/reactions",
    total_count: 0,
    "+1": 0,
    "-1": 0,
    laugh: 0,
    hooray: 0,
    confused: 0,
    heart: 0,
    rocket: 0,
    eyes: 0,
  },
  timeline_url:
    "https://api.github.com/repos/angular/angular/issues/50168/timeline",
  performed_via_github_app: null,
  state_reason: null,
};

export type TypeIssue = typeof prevIssue;
