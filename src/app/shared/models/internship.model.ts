import {Company} from "@app/shared/models/company.model";

export interface Internship {
  _id: string,
  Title: string,
  Domain: string,
  Company: Company,
  Description: string,
  Location: string,
  Duration: string,
  Deadline: Date,
  StartingDate: Date,
  IsArchived: boolean
}
