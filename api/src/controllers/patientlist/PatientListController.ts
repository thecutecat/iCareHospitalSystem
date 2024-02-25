import { mpatient } from "../../entity/Patient";
import {
  Get,
  Post,
  Body,
  JsonController,
  Authorized,
  QueryParam,
  Param,
  Put,
  Delete
} from "routing-controllers";
import {
  PaginationInfo,
  IPaginationQueryParam
} from "../../decorators/PaginationInfo";
import { CrudServices, IFetchPageQuery } from "../../services/CrudServices";
import { CurrentUser } from "../../decorators/CurrentUser";

@JsonController("/patientlist")
/*@Authorized()*/
export class PatientListController {
  private crudServices: CrudServices<mpatient>;

  constructor() {
    this.crudServices = new CrudServices<mpatient>();
    this.crudServices.setEntity(mpatient);
  }

  @Get("/:id")
  public async getmPatientById(@Param("id") id: string): Promise<any> {
    var Sql = "SELECT * FROM mpatient WHERE id="+ id;
    const res = await this.crudServices.fetchById(id); //executeSql(Sql); //
    console.log('API Data:', res.name);
    return res || {};
  }

  @Get()
  public async getmPatients(
    @PaginationInfo() paginationInfo: IPaginationQueryParam,
    @QueryParam("q") search?: string
  ): Promise<mpatient[]> {
    const query: IFetchPageQuery = {
      search,
      perPage: paginationInfo.perPage,
      page: paginationInfo.pageNo
    };
    return await this.crudServices.fetchPages(query);
  }

  @Post()
  public async createNewmPatients(
    @Body() mpatient: mpatient,
    @CurrentUser() userid: string
  ): Promise<any> {
    //throw(mpatient);
    //return await this.crudServices.create(userid, (isnull(mpatient))?? "" : mpatient.name); // .? : .name.toString());
    return await this.crudServices.create(userid, mpatient);
  }

  @Put("/:id")
  public async updatemPatient(
    @Param("id") id: string,
    @Body() data: mpatient,
    @CurrentUser() userid: string
  ) {
    return await this.crudServices.updateById(userid, { id }, data);
  }

  @Delete("/:id")
  public async deletemPatient(@Param("id") id: string): Promise<any> {
    return await this.crudServices.deleteById(id);
  }
}
function isnull(mpo: typeof mpatient): mpatient {
  throw new Error("Function not implemented.");
}

