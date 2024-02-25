import { MPatientTreatment } from "../../entity/MPatientTreatment";
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

@JsonController("/patienttreatment")
// @Authorized()
export class MPatientTreatmentController {
  private crudServices: CrudServices<MPatientTreatment>;

  constructor() {
    this.crudServices = new CrudServices<MPatientTreatment>();
    this.crudServices.setEntity(MPatientTreatment);
  }

  @Get("/:id")
  public async getProductById(@Param("id") id: string): Promise<any> {
    const res = await this.crudServices.fetchById(id);
    return res || {};
  }

  @Get()
  public async getPatientTreatment(
    @PaginationInfo() paginationInfo: IPaginationQueryParam,
    @QueryParam("q") search?: string
  ): Promise<MPatientTreatment[]> {
    const query: IFetchPageQuery = {
      search,
      perPage: paginationInfo.perPage,
      page: paginationInfo.pageNo
    };
    return await this.crudServices.fetchPages(query);
  }

  @Post()
  public async createNewPatientTreatment(
    @Body() MPatientTreatment: MPatientTreatment,
    @CurrentUser() userid: string
  ): Promise<any> {
    return await this.crudServices.create(userid, MPatientTreatment);
  }

  @Put("/:id")
  public async updatePatientTreatment(
    @Param("id") id: string,
    @Body() data: MPatientTreatment,
    @CurrentUser() userid: string
  ) {
    return await this.crudServices.updateById(userid, { id }, data);
  }

  @Delete("/:id")
  public async deletePatientTreatment(@Param("id") id: string): Promise<any> {
    return await this.crudServices.deleteById(id);
  }
}
