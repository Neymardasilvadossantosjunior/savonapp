import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: 'confidentialite', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
