<script lang="ts">
  import { Router } from "@roxi/routify";
  import { routes } from "../.routify/routes";
  import "tw-elements";
</script>

<div class="bg-slate-200 h-screen">
  <Router {routes} />
</div>
