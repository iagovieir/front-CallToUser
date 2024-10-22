import { Leader } from "./leader.model"
import { NomenclatureOffice } from "./nomenclatureOffice.model"
import { Phone } from "./phone.model"
import { Sector } from "./sector.model"
import { Sex } from "./sex.model"
import { Status } from "./status.model"
import { Subordinates } from "./subordinates.model"

export interface Users{

    CPF?: string
    name?: string
    corporate_email?: string
    personal_email?: string
    matriculation?: string
    date_of_birth?: string
    createdAt?: string
    sector?: Sector
    updatedAt?: string
    sex?: Sex
    status?: Status
    subordinates?: Subordinates[]
    leader?: Leader
    phone?: Phone[]
    NomenclatureOffice?: NomenclatureOffice
}