-- ReleaseGovernance core schema
create table if not exists governance_tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  plan text not null default 'starter',
  created_at timestamptz not null default now()
);

create table if not exists governance_projects (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references governance_tenants(id) on delete cascade,
  name text not null,
  slug text not null,
  description text,
  jira_project_key text,
  lovable_project_id text,
  web_repository text,
  android_repository text,
  ios_repository text,
  backend_system text,
  created_at timestamptz not null default now(),
  unique (tenant_id, slug)
);

create table if not exists governance_releases (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references governance_projects(id) on delete cascade,
  version text not null,
  release_type text not null default 'application',
  shipped_at timestamptz,
  backend_changed boolean not null default false,
  shared_contract_changed boolean not null default false,
  schema_changed boolean not null default false,
  jira_backfill_required boolean not null default false,
  release_notes text,
  created_at timestamptz not null default now(),
  unique (project_id, version)
);

create table if not exists governance_release_surfaces (
  id uuid primary key default gen_random_uuid(),
  release_id uuid not null references governance_releases(id) on delete cascade,
  surface text not null,
  unique (release_id, surface)
);

create table if not exists governance_integrations (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references governance_projects(id) on delete cascade,
  name text not null,
  category text not null,
  state text not null default 'planned',
  environment_sensitive boolean not null default false,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists governance_capabilities (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references governance_projects(id) on delete cascade,
  capability_key text not null,
  name text not null,
  parity_status text not null default 'planned',
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (project_id, capability_key)
);

create table if not exists governance_capability_surfaces (
  id uuid primary key default gen_random_uuid(),
  capability_id uuid not null references governance_capabilities(id) on delete cascade,
  surface text not null,
  status text not null,
  first_release_version text,
  unique (capability_id, surface)
);

create table if not exists governance_jira_links (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references governance_projects(id) on delete cascade,
  external_key text not null,
  summary text,
  status text,
  issue_url text,
  metadata jsonb not null default '{}'::jsonb,
  unique (project_id, external_key)
);

create table if not exists governance_release_jira_links (
  id uuid primary key default gen_random_uuid(),
  release_id uuid not null references governance_releases(id) on delete cascade,
  jira_link_id uuid not null references governance_jira_links(id) on delete cascade,
  unique (release_id, jira_link_id)
);

create table if not exists governance_parity_alerts (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references governance_projects(id) on delete cascade,
  source_surface text not null,
  affected_surface text not null,
  severity text not null,
  state text not null default 'open',
  reason text not null,
  jira_key text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists governance_deployments (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references governance_projects(id) on delete cascade,
  source text not null,
  environment text not null,
  status text not null,
  deployment_url text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
