// import { AuthService } from '../services/AuthService'
// import { EntityService } from '../services/EntityService'
// import { EntityAdminService } from '../services/EntityAdminService'

// import { CategoriesService } from '../services/CategoriesService'
// import { FolderService } from '../services/FolderServices'
// import { FormService } from '../services/forms'
// import { FormSectionService } from '../services/FormSectionService'

import { DisplayService } from "~/services/DisplayService";

import { AuthUser } from "~/services/AuthUser";


export default ({ app: { $axios } }, inject) => {



  const authUser = new AuthUser($axios);
  const displayService = new DisplayService($axios);
//   // create an instance of the service
//   const authService = new AuthService($axios)
//   const entityAdminService = new EntityAdminService($axios)
//   const entityService = new EntityService($axios)
//   const categoriesService = new CategoriesService($axios)
//   const folderService = new FolderService($axios)
//   const formService = new FormService($axios)

//   const eRegulationServices = new E_RegulationServices($axios)
//   const formSection = new FormSectionService($axios)


  inject('authUser', authUser)
  inject('displayService', displayService)
//   inject('categoriesService', categoriesService)
//   inject('entityService', entityService)
//   inject('entityAdminService', entityAdminService)
//   inject('folderService', folderService)
//   inject('formService', formService)

//   inject('eRegulationServices', eRegulationServices)

//   inject('formSection', formSection)

}


