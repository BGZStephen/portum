import { Routes, RouterModule } from '@angular/router';
import * as components from 'app/components/components-barrel';

const APP_ROUTES: Routes = [
  {path: '', component: components.ViewWrapperComponent, children: [
    {path: '', component: components.HomeViewComponent},
    {path: 'blog', component: components.BlogListViewComponent},
    {path: 'blog/:id', component: components.BlogPostViewComponent},
  ]}
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
