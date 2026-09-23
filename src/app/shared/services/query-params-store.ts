import { inject, Service } from '@angular/core';
import { ActivatedRoute, Params, QueryParamsHandling, Router } from '@angular/router';

@Service()
export class QueryParamsStore {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  /**
   * Updates query parameters
   * @param queryParams - Query parameters
   * @param queryParamsHandling - Query parameters handling type
   */
  updateQueryParams(
    queryParams: Params,
    queryParamsHandling: QueryParamsHandling = 'merge'
  ): Promise<boolean> {
    return this.router.navigate([], {
        relativeTo: this.route,
        queryParams,
        queryParamsHandling,
      }
    );
  }
}
