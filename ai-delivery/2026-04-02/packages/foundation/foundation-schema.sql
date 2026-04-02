begin;

create table if not exists public.workspaces (
  id text primary key,
  name text not null,
  plan text not null check (plan in ('starter', 'growth', 'enterprise')),
  status text not null default 'active' check (status in ('active', 'suspended')),
  owners jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.projects (
  id text primary key,
  workspace_id text not null references public.workspaces(id) on delete cascade,
  name text not null,
  slug text not null,
  description text not null,
  product_type text,
  lifecycle_state text not null default 'active' check (lifecycle_state in ('draft', 'active', 'paused', 'deprecated', 'archived')),
  jira_project_key text,
  primary_repo_id text,
  default_release_branch text,
  deployment_status text not null default 'warning' check (deployment_status in ('healthy', 'warning', 'failing')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (workspace_id, slug)
);

create table if not exists public.releases (
  id text primary key,
  project_id text not null references public.projects(id) on delete cascade,
  version text not null,
  release_state text not null check (release_state in ('released', 'unreleased')),
  release_status text not null check (release_status in ('current', 'old', 'unreleased', 'candidate')),
  approval_state text not null default 'draft' check (approval_state in ('draft', 'under-review', 'approved', 'rejected')),
  detected_at timestamptz,
  released_at timestamptz,
  source_kind text not null check (source_kind in ('github', 'uploaded-snapshot', 'markdown-import', 'jira-import', 'manual', 'unknown')),
  source_payload jsonb not null default '{}'::jsonb,
  changelog_title text,
  changelog_excerpt jsonb not null default '[]'::jsonb,
  release_notes text not null default '',
  deployment_comment text,
  backend_changed boolean not null default false,
  shared_contract_changed boolean not null default false,
  schema_changed boolean not null default false,
  confidence_score numeric(5,2),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.capabilities (
  id text primary key,
  project_id text not null references public.projects(id) on delete cascade,
  name text not null,
  slug text not null,
  description text,
  lifecycle_status text not null default 'planned' check (lifecycle_status in ('planned', 'partial', 'shipped', 'deprecated')),
  parity_status text not null default 'planned' check (parity_status in ('aligned', 'follow-up-required', 'planned')),
  tenant_scope text,
  channel_scope text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (project_id, slug)
);

create table if not exists public.integrations (
  id text primary key,
  project_id text not null references public.projects(id) on delete cascade,
  name text not null,
  provider_key text not null,
  category text not null check (category in ('source-control', 'planning', 'deployment', 'backend', 'external-api', 'design', 'documentation')),
  state text not null check (state in ('connected', 'attention', 'planned')),
  health_state text not null default 'unknown' check (health_state in ('unknown', 'healthy', 'degraded', 'failing')),
  environment_sensitive boolean not null default false,
  notes text,
  config_complete boolean not null default false,
  last_tested_at timestamptz,
  last_sync_at timestamptz,
  url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

commit;
