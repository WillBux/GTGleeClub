import { GraphQLClient } from 'graphql-request'
import * as Dom from 'graphql-request/dist/types.dom'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateScalar: string
  TimeScalar: string
  UniformColor: string
}

export type AbsenceRequest = {
  __typename?: 'AbsenceRequest'
  /** The event they requested absence from */
  event: Event
  /** The member that requested an absence */
  member: Member
  /** The reason the member petitioned for absence with */
  reason: Scalars['String']
  /** The current state of the request */
  state: AbsenceRequestStatus
  /** The time this request was placed */
  time: DateTime
}

export enum AbsenceRequestStatus {
  Approved = 'APPROVED',
  Denied = 'DENIED',
  Pending = 'PENDING',
}

export type ActiveSemester = {
  __typename?: 'ActiveSemester'
  /** Whether the member was registered for the class */
  enrollment: Enrollment
  /** The grades for the member in the given semester */
  grades: Grades
  /** The email of the member */
  member: Scalars['String']
  /** What section the member sang in */
  section: Scalars['String']
  /** The name of the semester */
  semester: Scalars['String']
}

export type Attendance = {
  __typename?: 'Attendance'
  /** The absence request made by the current member, if they requested one */
  absenceRequest?: Maybe<AbsenceRequest>
  /** Whether the absence is approved */
  approvedAbsence: Scalars['Boolean']
  /** Whether the member confirmed that they would attend */
  confirmed: Scalars['Boolean']
  /** If credit for attending the event should be denied */
  denyCredit: Scalars['Boolean']
  /** Whether the member did attend the event */
  didAttend: Scalars['Boolean']
  /** The email of the member this attendance belongs to */
  member: Member
  /** How late the member was if they attended */
  minutesLate: Scalars['Int']
  /** If the member is not allowed to RSVP, this is why */
  rsvpIssue?: Maybe<Scalars['String']>
  /** Whether the member is expected to attend the event */
  shouldAttend: Scalars['Boolean']
}

export type AttendanceUpdate = {
  confirmed: Scalars['Boolean']
  didAttend: Scalars['Boolean']
  minutesLate: Scalars['Int']
  shouldAttend: Scalars['Boolean']
}

export type Carpool = {
  __typename?: 'Carpool'
  /** The driver of the carpool */
  driver: Member
  /** The event it belongs to */
  event: Scalars['Int']
  /** The ID of the carpool */
  id: Scalars['Int']
  /** The passengers of the carpool */
  passengers: Array<Member>
}

export type ClubTransaction = {
  __typename?: 'ClubTransaction'
  /** How much this transaction was for */
  amount: Scalars['Int']
  /** A description of what the member was charged for specifically */
  description: Scalars['String']
  /** The ID of the transaction */
  id: Scalars['Int']
  /** The member this transaction was charged to */
  member: Member
  /** Whether the member has paid the amount requested in this transaction */
  resolved: Scalars['Boolean']
  /** Optionally, the name of the semester this tranaction was made during */
  semester?: Maybe<Scalars['String']>
  /** When this transaction was charged */
  time: DateTime
  /** The name of the type of transaction */
  type: Scalars['String']
}

export type DateTime = {
  __typename?: 'DateTime'
  /** The date part of the datetime */
  date: Scalars['DateScalar']
  /** The time part of the datetime */
  time: Scalars['TimeScalar']
}

export type DateTimeInput = {
  /** The date part of the datetime */
  date: Scalars['DateScalar']
  /** The time part of the datetime */
  time: Scalars['TimeScalar']
}

/** A link to a Google Doc or other important document. */
export type DocumentLink = {
  __typename?: 'DocumentLink'
  /** The name of the link */
  name: Scalars['String']
  /** The link itself */
  url: Scalars['String']
}

export enum Enrollment {
  Class = 'CLASS',
  Club = 'CLUB',
}

export type Event = {
  __typename?: 'Event'
  allAttendance: Array<Attendance>
  /** The attendance for a specific member at this event */
  attendance?: Maybe<Attendance>
  /** When members are expected to arrive to the event */
  callTime: DateTime
  carpools: Array<Carpool>
  /** General information or details about this event */
  comments: Scalars['String']
  /** Whether members are assumed to attend (we assume as much for most events) */
  defaultAttend: Scalars['Boolean']
  /** The gig for this event, if it is a gig */
  gig?: Maybe<Gig>
  /** Whether this event counts toward the volunteer gig count for the semester */
  gigCount: Scalars['Boolean']
  /** The ID of the event */
  id: Scalars['Int']
  /** Where this event will be held */
  location: Scalars['String']
  /** The name of the event */
  name: Scalars['String']
  /** How many points attendance of this event is worth */
  points: Scalars['Int']
  /** When members are probably going to be released */
  releaseTime?: Maybe<DateTime>
  /** The name of the semester this event belongs to */
  semester: Scalars['String']
  setlist: Array<Song>
  /** The type of the event (see EventType) */
  type: Scalars['String']
  /** The attendance for the current user at this event */
  userAttendance?: Maybe<Attendance>
}

export type EventAllAttendanceArgs = {
  emptyIfNotPermitted?: Scalars['Boolean']
}

export type EventAttendanceArgs = {
  member: Scalars['String']
}

export type EventType = {
  __typename?: 'EventType'
  /** The name of the type of event */
  name: Scalars['String']
  /** The amount of points this event is normally worth */
  weight: Scalars['Int']
}

export type EventWithGradeChange = {
  __typename?: 'EventWithGradeChange'
  /** What grade change occurred, for what reason */
  change: GradeChange
  /** The event a grade was received for */
  event: Event
}

export type Fee = {
  __typename?: 'Fee'
  /** The amount to charge members */
  amount: Scalars['Int']
  /** A longer description of what it is charging members for */
  description: Scalars['String']
  /** The short name of the fee */
  name: Scalars['String']
}

export type Gig = {
  __typename?: 'Gig'
  /** The email of the contact for this gig */
  contactEmail: Scalars['String']
  /** The name of the contact for this gig */
  contactName: Scalars['String']
  /** The phone number of the contact for this gig */
  contactPhone: Scalars['String']
  /** A description of this event for the external site (if it is public) */
  description: Scalars['String']
  /** The ID of the event this gig belongs to */
  event: Scalars['Int']
  /** When members are expected to actually perform */
  performanceTime: DateTime
  /** The price we are charging for this gig */
  price?: Maybe<Scalars['Int']>
  /** Whether this gig is visible on the external website */
  public: Scalars['Boolean']
  /** A summary of this event for the external site (if it is public) */
  summary: Scalars['String']
  /** The uniform for this gig */
  uniform: Uniform
}

export type GigRequest = {
  __typename?: 'GigRequest'
  /** Any comments about the event */
  comments: Scalars['String']
  /** The phone number of the contact for the potential event */
  contactEmail: Scalars['String']
  /** The name of the contact for the potential event */
  contactName: Scalars['String']
  /** The email of the contact for the potential event */
  contactPhone: Scalars['String']
  /** If and when an event is created from a request, this is the event */
  event?: Maybe<Event>
  /** The ID of the gig request */
  id: Scalars['Int']
  /** Where the event will be happening */
  location: Scalars['String']
  /** The name of the potential event */
  name: Scalars['String']
  /** The organization requesting a performance from the Glee Club */
  organization: Scalars['String']
  /** When the event will probably happen */
  startTime: DateTime
  /** The current status of whether the request was accepted */
  status: GigRequestStatus
  /** When the gig request was placed */
  time: DateTime
}

export enum GigRequestStatus {
  Accepted = 'ACCEPTED',
  Dismissed = 'DISMISSED',
  Pending = 'PENDING',
}

export type GradeChange = {
  __typename?: 'GradeChange'
  /** How much the grade changed */
  change: Scalars['Float']
  /** What the final grade was up to this event */
  partialScore: Scalars['Float']
  /** The reason the grade change was incurred */
  reason: Scalars['String']
}

export type Grades = {
  __typename?: 'Grades'
  /** The events of the semester, with the grade changes for those events */
  eventsWithChanges: Array<EventWithGradeChange>
  /** The overall grade for the semester */
  grade: Scalars['Float']
  /** The volunteer gigs attended over the semester */
  volunteerGigsAttended: Array<Event>
}

export type MediaType = {
  __typename?: 'MediaType'
  /** The name of the type of media */
  name: Scalars['String']
  /** The order of where this media type appears in a song's link section */
  order: Scalars['Int']
  /** The type of storage that this type of media points to */
  storage: StorageType
}

export type Member = {
  __typename?: 'Member'
  /** A short biography written by the member */
  about: Scalars['String']
  /** What year the member arrived at Georgia Tech */
  arrivedAtTech?: Maybe<Scalars['Int']>
  /** What conflicts with rehearsal the member may have */
  conflicts: Scalars['String']
  /** Any dietary restrictions the member may have */
  dietaryRestrictions: Scalars['String']
  /** The member's email, which must be unique */
  email: Scalars['String']
  /** The member's first name */
  firstName: Scalars['String']
  /** The member's full name */
  fullName: Scalars['String']
  /** What got them to join Glee Club */
  gatewayDrug: Scalars['String']
  /** The grades for the member in the given semester (default the current semester) */
  grades: Grades
  /** Where the member came from */
  hometown: Scalars['String']
  /** The member's last name */
  lastName: Scalars['String']
  /** Where the member lives */
  location: Scalars['String']
  /** The member's academic major */
  major: Scalars['String']
  /** The member's academic minor */
  minor: Scalars['String']
  /** Whether the member lives on campus */
  onCampus: Scalars['Boolean']
  /** How many people the member can drive to events (besides themself) */
  passengers: Scalars['Int']
  /** The permissions currently held by the member */
  permissions: Array<MemberPermission>
  /** The member's phone number */
  phoneNumber: Scalars['String']
  /** An optional link to a profile picture for the member */
  picture: Scalars['String']
  /** The officer positions currently held by the member */
  positions: Array<Role>
  /** The member's nick name */
  preferredName?: Maybe<Scalars['String']>
  /** Info about the member from last semester, if they were active */
  previousSemester?: Maybe<ActiveSemester>
  /** Info on the member for the current semester, if they are active */
  semester?: Maybe<ActiveSemester>
  /** Info for each semester the member was active */
  semesters: Array<ActiveSemester>
  /** All of the member's transactions for their entire time in Glee Club */
  transactions: Array<ClubTransaction>
}

export type MemberGradesArgs = {
  semester?: InputMaybe<Scalars['String']>
}

export type MemberPermission = {
  __typename?: 'MemberPermission'
  /** Optionally, the type of event the permission applies to */
  eventType?: Maybe<Scalars['String']>
  /** The name of the permission */
  name: Scalars['String']
}

export type MemberRole = {
  __typename?: 'MemberRole'
  /** The member holding the role */
  member: Member
  /** The name of the role being held */
  role: Scalars['String']
}

export type MemberUpdate = {
  about: Scalars['String']
  arrivedAtTech?: InputMaybe<Scalars['Int']>
  conflicts: Scalars['String']
  dietaryRestrictions: Scalars['String']
  email: Scalars['String']
  enrollment?: InputMaybe<Enrollment>
  firstName: Scalars['String']
  gatewayDrug: Scalars['String']
  hometown: Scalars['String']
  lastName: Scalars['String']
  location: Scalars['String']
  major: Scalars['String']
  minor: Scalars['String']
  onCampus: Scalars['Boolean']
  passHash?: InputMaybe<Scalars['String']>
  passengers: Scalars['Int']
  phoneNumber: Scalars['String']
  picture: Scalars['String']
  preferredName?: InputMaybe<Scalars['String']>
  section?: InputMaybe<Scalars['String']>
}

export type Minutes = {
  __typename?: 'Minutes'
  /** When these notes were initially created */
  date: Scalars['DateScalar']
  /** The ID of the meeting minutes */
  id: Scalars['Int']
  /** The name of the meeting */
  name: Scalars['String']
  /** The private, complete officer notes */
  private?: Maybe<Scalars['String']>
  /** The public, redacted notes visible by all members */
  public?: Maybe<Scalars['String']>
}

export type MutationRoot = {
  __typename?: 'MutationRoot'
  addBatchOfTransactions: Array<ClubTransaction>
  addOfficership: Scalars['Boolean']
  addPermissionToRole: Scalars['Boolean']
  chargeDues: Array<ClubTransaction>
  chargeLateDues: Array<ClubTransaction>
  confirmForEvent: Attendance
  createEvent: Event
  createLink: DocumentLink
  createMeetingMinutes: Minutes
  createSemester: Semester
  createSong: Song
  createSongLink: SongLink
  createUniform: Uniform
  /** Deletes an event and returns its ID */
  deleteEvent: Scalars['Int']
  deleteLink: DocumentLink
  deleteMeetingMinutes: Minutes
  /** Deletes a member and returns their email */
  deleteMember: Scalars['String']
  deleteSong: Song
  deleteSongLink: SongLink
  deleteUniform: Uniform
  dismissGigRequest: GigRequest
  excuseUnconfirmedForEvent: Scalars['String']
  forgotPassword: Scalars['String']
  /** Gets a login token on successful login */
  login: Scalars['String']
  loginAs: Scalars['String']
  /** Logs the member out */
  logout: Scalars['String']
  registerForSemester: Member
  registerMember: Member
  removeOfficership: Scalars['Boolean']
  removePermissionFromRole: Scalars['Boolean']
  reopenGigRequest: GigRequest
  resetPassword: Scalars['String']
  resolveTransaction: ClubTransaction
  respondToAbsenceRequest: AbsenceRequest
  rsvpForEvent: Attendance
  setCurrentSemester: Semester
  setVariable: Variable
  submitAbsenceRequest: AbsenceRequest
  submitGigRequest: GigRequest
  unsetVariable: Scalars['String']
  updateAttendance: Attendance
  updateCarpools: Array<Carpool>
  updateEvent: Event
  updateFeeAmount: Fee
  updateLink: DocumentLink
  updateMeetingMinutes: Minutes
  updateMember: Member
  updateProfile: Member
  updateSemester: Semester
  updateSong: Song
  updateSongLink: SongLink
  updateUniform: Uniform
}

export type MutationRootAddBatchOfTransactionsArgs = {
  batch: TransactionBatch
}

export type MutationRootAddOfficershipArgs = {
  email: Scalars['String']
  role: Scalars['String']
}

export type MutationRootAddPermissionToRoleArgs = {
  rolePermission: NewRolePermission
}

export type MutationRootConfirmForEventArgs = {
  id: Scalars['Int']
}

export type MutationRootCreateEventArgs = {
  gigRequestId?: InputMaybe<Scalars['Int']>
  newEvent: NewEvent
}

export type MutationRootCreateLinkArgs = {
  name: Scalars['String']
  url: Scalars['String']
}

export type MutationRootCreateMeetingMinutesArgs = {
  name: Scalars['String']
}

export type MutationRootCreateSemesterArgs = {
  newSemester: NewSemester
}

export type MutationRootCreateSongArgs = {
  newSong: NewSong
}

export type MutationRootCreateSongLinkArgs = {
  newLink: NewSongLink
  songId: Scalars['Int']
}

export type MutationRootCreateUniformArgs = {
  newUniform: NewUniform
}

export type MutationRootDeleteEventArgs = {
  id: Scalars['Int']
}

export type MutationRootDeleteLinkArgs = {
  name: Scalars['String']
}

export type MutationRootDeleteMeetingMinutesArgs = {
  id: Scalars['Int']
}

export type MutationRootDeleteMemberArgs = {
  email: Scalars['String']
}

export type MutationRootDeleteSongArgs = {
  id: Scalars['Int']
}

export type MutationRootDeleteSongLinkArgs = {
  id: Scalars['Int']
}

export type MutationRootDeleteUniformArgs = {
  id: Scalars['Int']
}

export type MutationRootDismissGigRequestArgs = {
  id: Scalars['Int']
}

export type MutationRootExcuseUnconfirmedForEventArgs = {
  eventId: Scalars['Int']
}

export type MutationRootForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationRootLoginArgs = {
  email: Scalars['String']
  passHash: Scalars['String']
}

export type MutationRootLoginAsArgs = {
  email: Scalars['String']
}

export type MutationRootRegisterForSemesterArgs = {
  newSemester: RegisterForSemesterForm
}

export type MutationRootRegisterMemberArgs = {
  newMember: NewMember
}

export type MutationRootRemoveOfficershipArgs = {
  email: Scalars['String']
  role: Scalars['String']
}

export type MutationRootRemovePermissionFromRoleArgs = {
  rolePermission: NewRolePermission
}

export type MutationRootReopenGigRequestArgs = {
  id: Scalars['Int']
}

export type MutationRootResetPasswordArgs = {
  passHash: Scalars['String']
  token: Scalars['String']
}

export type MutationRootResolveTransactionArgs = {
  id: Scalars['Int']
  resolved: Scalars['Boolean']
}

export type MutationRootRespondToAbsenceRequestArgs = {
  approved: Scalars['Boolean']
  email: Scalars['String']
  eventId: Scalars['Int']
}

export type MutationRootRsvpForEventArgs = {
  attending: Scalars['Boolean']
  id: Scalars['Int']
}

export type MutationRootSetCurrentSemesterArgs = {
  name: Scalars['String']
}

export type MutationRootSetVariableArgs = {
  key: Scalars['String']
  value: Scalars['String']
}

export type MutationRootSubmitAbsenceRequestArgs = {
  eventId: Scalars['Int']
  reason: Scalars['String']
}

export type MutationRootSubmitGigRequestArgs = {
  request: NewGigRequest
}

export type MutationRootUnsetVariableArgs = {
  key: Scalars['String']
}

export type MutationRootUpdateAttendanceArgs = {
  email: Scalars['String']
  eventId: Scalars['Int']
  update: AttendanceUpdate
}

export type MutationRootUpdateCarpoolsArgs = {
  carpools: Array<UpdatedCarpool>
  eventId: Scalars['Int']
}

export type MutationRootUpdateEventArgs = {
  id: Scalars['Int']
  newEvent: NewEvent
}

export type MutationRootUpdateFeeAmountArgs = {
  amount: Scalars['Int']
  name: Scalars['String']
}

export type MutationRootUpdateLinkArgs = {
  name: Scalars['String']
  url: Scalars['String']
}

export type MutationRootUpdateMeetingMinutesArgs = {
  id: Scalars['Int']
  update: UpdatedMeetingMinutes
}

export type MutationRootUpdateMemberArgs = {
  email: Scalars['String']
  newMember: MemberUpdate
}

export type MutationRootUpdateProfileArgs = {
  newMember: MemberUpdate
}

export type MutationRootUpdateSemesterArgs = {
  name: Scalars['String']
  update: NewSemester
}

export type MutationRootUpdateSongArgs = {
  id: Scalars['Int']
  update: SongUpdate
}

export type MutationRootUpdateSongLinkArgs = {
  id: Scalars['Int']
  update: SongLinkUpdate
}

export type MutationRootUpdateUniformArgs = {
  id: Scalars['Int']
  update: NewUniform
}

export type NewEvent = {
  event: NewEventFields
  gig?: InputMaybe<NewGig>
  repeat?: InputMaybe<NewEventPeriod>
}

export type NewEventFields = {
  callTime: DateTimeInput
  comments?: InputMaybe<Scalars['String']>
  defaultAttend: Scalars['Boolean']
  gigCount?: InputMaybe<Scalars['Boolean']>
  location?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  points: Scalars['Int']
  releaseTime?: InputMaybe<DateTimeInput>
  semester: Scalars['String']
  type: Scalars['String']
}

export type NewEventPeriod = {
  period: Period
  repeatUntil: Scalars['DateScalar']
}

export type NewGig = {
  contactEmail: Scalars['String']
  contactName: Scalars['String']
  contactPhone: Scalars['String']
  description: Scalars['String']
  performanceTime: Scalars['TimeScalar']
  price?: InputMaybe<Scalars['Int']>
  public: Scalars['Boolean']
  summary: Scalars['String']
  uniform: Scalars['Int']
}

export type NewGigRequest = {
  comments: Scalars['String']
  contactEmail: Scalars['String']
  contactName: Scalars['String']
  contactPhone: Scalars['String']
  location: Scalars['String']
  name: Scalars['String']
  organization: Scalars['String']
  startTime: DateTimeInput
}

export type NewMember = {
  about: Scalars['String']
  arrivedAtTech?: InputMaybe<Scalars['Int']>
  conflicts: Scalars['String']
  dietaryRestrictions: Scalars['String']
  email: Scalars['String']
  enrollment: Enrollment
  firstName: Scalars['String']
  gatewayDrug: Scalars['String']
  hometown: Scalars['String']
  lastName: Scalars['String']
  location: Scalars['String']
  major: Scalars['String']
  minor: Scalars['String']
  onCampus: Scalars['Boolean']
  passHash: Scalars['String']
  passengers: Scalars['Int']
  phoneNumber: Scalars['String']
  picture: Scalars['String']
  preferredName?: InputMaybe<Scalars['String']>
  section?: InputMaybe<Scalars['String']>
}

export type NewRolePermission = {
  /** Optionally, the type of the event the permission applies to */
  eventType?: InputMaybe<Scalars['String']>
  /** The name of the permission the role is awarded */
  permission: Scalars['String']
  /** The name of the role this junction refers to */
  role: Scalars['String']
}

export type NewSemester = {
  endDate: Scalars['DateScalar']
  gigRequirement: Scalars['Int']
  name: Scalars['String']
  startDate: Scalars['DateScalar']
}

export type NewSong = {
  info?: InputMaybe<Scalars['String']>
  title: Scalars['String']
}

export type NewSongLink = {
  content?: InputMaybe<Scalars['String']>
  name: Scalars['String']
  type: Scalars['String']
  url: Scalars['String']
}

export type NewUniform = {
  color?: InputMaybe<Scalars['UniformColor']>
  description: Scalars['String']
  name: Scalars['String']
}

export enum Period {
  Biweekly = 'BIWEEKLY',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY',
}

export type Permission = {
  __typename?: 'Permission'
  /** A description of what the permission entails */
  description?: Maybe<Scalars['String']>
  /** The name of the permission */
  name: Scalars['String']
  /** Whether the permission applies to a type of event or generally */
  type: PermissionType
}

export enum PermissionType {
  Event = 'EVENT',
  Static = 'STATIC',
}

export enum Pitch {
  A = 'A',
  AFlat = 'A_FLAT',
  ASharp = 'A_SHARP',
  B = 'B',
  BFlat = 'B_FLAT',
  BSharp = 'B_SHARP',
  C = 'C',
  CFlat = 'C_FLAT',
  CSharp = 'C_SHARP',
  D = 'D',
  DFlat = 'D_FLAT',
  DSharp = 'D_SHARP',
  E = 'E',
  EFlat = 'E_FLAT',
  ESharp = 'E_SHARP',
  F = 'F',
  FFlat = 'F_FLAT',
  FSharp = 'F_SHARP',
  G = 'G',
  GFlat = 'G_FLAT',
  GSharp = 'G_SHARP',
}

export type PublicEvent = {
  __typename?: 'PublicEvent'
  description: Scalars['String']
  endTime?: Maybe<DateTime>
  id: Scalars['Int']
  invite: Scalars['String']
  location: Scalars['String']
  name: Scalars['String']
  startTime: DateTime
  summary: Scalars['String']
}

export type PublicSong = {
  __typename?: 'PublicSong'
  current: Scalars['Boolean']
  title: Scalars['String']
  videos: Array<PublicVideo>
}

export type PublicVideo = {
  __typename?: 'PublicVideo'
  title: Scalars['String']
  url: Scalars['String']
}

export type QueryRoot = {
  __typename?: 'QueryRoot'
  absenceRequests: Array<AbsenceRequest>
  allMeetingMinutes: Array<Minutes>
  currentPermissions: Array<RolePermission>
  currentSemester: Semester
  event: Event
  events: Array<Event>
  fees: Array<Fee>
  gigRequest: GigRequest
  gigRequests: Array<GigRequest>
  links: Array<DocumentLink>
  meetingMinutes: Minutes
  member: Member
  members: Array<Member>
  officers: Array<MemberRole>
  publicEvents: Array<PublicEvent>
  publicSongs: Array<PublicSong>
  semester: Semester
  semesters: Array<Semester>
  song: Song
  songLink: SongLink
  songs: Array<Song>
  static: StaticData
  transactions: Array<ClubTransaction>
  uniform: Uniform
  uniforms: Array<Uniform>
  user?: Maybe<Member>
  variable: Variable
}

export type QueryRootEventArgs = {
  id: Scalars['Int']
}

export type QueryRootGigRequestArgs = {
  id: Scalars['Int']
}

export type QueryRootMeetingMinutesArgs = {
  id: Scalars['Int']
}

export type QueryRootMemberArgs = {
  email: Scalars['String']
}

export type QueryRootMembersArgs = {
  includeClass?: Scalars['Boolean']
  includeClub?: Scalars['Boolean']
  includeInactive?: Scalars['Boolean']
}

export type QueryRootSemesterArgs = {
  name: Scalars['String']
}

export type QueryRootSongArgs = {
  id: Scalars['Int']
}

export type QueryRootSongLinkArgs = {
  id: Scalars['Int']
}

export type QueryRootUniformArgs = {
  id: Scalars['Int']
}

export type QueryRootVariableArgs = {
  key: Scalars['String']
}

export type RegisterForSemesterForm = {
  conflicts: Scalars['String']
  dietaryRestrictions: Scalars['String']
  enrollment: Enrollment
  location: Scalars['String']
  onCampus: Scalars['Boolean']
  section: Scalars['String']
}

/** Roles that can be held by members to grant permissions */
export type Role = {
  __typename?: 'Role'
  /**
   * The maximum number of the position allowed to be held at once.
   * If it is 0 or less, no maximum is enforced
   */
  maxQuantity: Scalars['Int']
  /** The name of the role */
  name: Scalars['String']
  /** Used for ordering the positions (e.g. President beforee Ombudsman) */
  rank: Scalars['Int']
}

export type RolePermission = {
  __typename?: 'RolePermission'
  /** Optionally, the type of the event the permission applies to */
  eventType?: Maybe<Scalars['String']>
  /** The ID of the role permission */
  id: Scalars['Int']
  /** The name of the permission the role is awarded */
  permission: Scalars['String']
  /** The name of the role this junction refers to */
  role: Scalars['String']
}

export type SectionType = {
  __typename?: 'SectionType'
  /** The name of the section (Tenor, Baritone, etc.) */
  name: Scalars['String']
}

export type Semester = {
  __typename?: 'Semester'
  /** Whether this is the current semester */
  current: Scalars['Boolean']
  /** When the semester ends */
  endDate: Scalars['DateScalar']
  /** How many volunteer gigs are required for the semester (default: 5) */
  gigRequirement: Scalars['Int']
  /** The name of the semester */
  name: Scalars['String']
  /** When the semester starts */
  startDate: Scalars['DateScalar']
}

export type Song = {
  __typename?: 'Song'
  /** Whether it is in this semester's repertoire */
  current: Scalars['Boolean']
  /** The ID of the song */
  id: Scalars['Int']
  /**
   * Any information related to the song
   * (minor changes to the music, who wrote it, soloists, etc.)
   */
  info: Scalars['String']
  /** The key of the song */
  key?: Maybe<Pitch>
  /** The sorted sections of links belonging to the song */
  linkSections: Array<SongLinkSection>
  /** The mode of the song (Major or Minor) */
  mode?: Maybe<SongMode>
  /** The starting pitch for the song */
  startingPitch?: Maybe<Pitch>
  /** The title of the song */
  title: Scalars['String']
}

export type SongLink = {
  __typename?: 'SongLink'
  /** The ID of the song link */
  id: Scalars['Int']
  /** The name of this link */
  name: Scalars['String']
  /** The ID of the song this link belongs to */
  song: Scalars['Int']
  /** The type of this link (e.g. MIDI) */
  type: Scalars['String']
  /** The URL this link points to */
  url: Scalars['String']
}

export type SongLinkSection = {
  __typename?: 'SongLinkSection'
  links: Array<SongLink>
  name: Scalars['String']
}

export type SongLinkUpdate = {
  name: Scalars['String']
  url: Scalars['String']
}

export enum SongMode {
  Major = 'MAJOR',
  Minor = 'MINOR',
}

export type SongUpdate = {
  current: Scalars['Boolean']
  info: Scalars['String']
  key?: InputMaybe<Pitch>
  mode?: InputMaybe<SongMode>
  startingPitch?: InputMaybe<Pitch>
  title: Scalars['String']
}

export type StaticData = {
  __typename?: 'StaticData'
  eventTypes: Array<EventType>
  mediaTypes: Array<MediaType>
  permissions: Array<Permission>
  roles: Array<Role>
  sections: Array<SectionType>
  transactionTypes: Array<TransactionType>
}

export enum StorageType {
  Local = 'LOCAL',
  Remote = 'REMOTE',
}

export type TransactionBatch = {
  amount: Scalars['Int']
  description: Scalars['String']
  members: Array<Scalars['String']>
  type: Scalars['String']
}

export type TransactionType = {
  __typename?: 'TransactionType'
  name: Scalars['String']
}

export type Uniform = {
  __typename?: 'Uniform'
  /** The associated color (In the format #HHH, H being a hex digit) */
  color?: Maybe<Scalars['UniformColor']>
  /** The explanation of what to wear when wearing the uniform */
  description: Scalars['String']
  /** The ID of the uniform */
  id: Scalars['Int']
  /** The name of the uniform */
  name: Scalars['String']
}

export type UpdatedCarpool = {
  driver: Scalars['String']
  passengers: Array<Scalars['String']>
}

export type UpdatedMeetingMinutes = {
  name: Scalars['String']
  private?: InputMaybe<Scalars['String']>
  public: Scalars['String']
}

/** Arbitrary variables for developer usage. */
export type Variable = {
  __typename?: 'Variable'
  /** The name of the variable. */
  key: Scalars['String']
  /** The value of the variable. */
  value: Scalars['String']
}

export type PublicEventsQueryVariables = Exact<{ [key: string]: never }>

export type PublicEventsQuery = {
  __typename?: 'QueryRoot'
  publicEvents: Array<{
    __typename?: 'PublicEvent'
    id: number
    name: string
    location: string
    summary: string
    description: string
    invite: string
    startTime: { __typename?: 'DateTime'; date: string; time: string }
    endTime?: { __typename?: 'DateTime'; date: string; time: string } | null
  }>
}

export type PublicSongsQueryVariables = Exact<{ [key: string]: never }>

export type PublicSongsQuery = {
  __typename?: 'QueryRoot'
  publicSongs: Array<{
    __typename?: 'PublicSong'
    title: string
    current: boolean
    videos: Array<{ __typename?: 'PublicVideo'; title: string; url: string }>
  }>
}

export type SubmitGigRequestMutationVariables = Exact<{
  request: NewGigRequest
}>

export type SubmitGigRequestMutation = {
  __typename?: 'MutationRoot'
  submitGigRequest: { __typename?: 'GigRequest'; id: number }
}

export const PublicEventsDocument = gql`
  query PublicEvents {
    publicEvents {
      id
      name
      location
      summary
      description
      startTime {
        date
        time
      }
      endTime {
        date
        time
      }
      invite
    }
  }
`
export const PublicSongsDocument = gql`
  query PublicSongs {
    publicSongs {
      title
      current
      videos {
        title
        url
      }
    }
  }
`
export const SubmitGigRequestDocument = gql`
  mutation SubmitGigRequest($request: NewGigRequest!) {
    submitGigRequest(request: $request) {
      id
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    PublicEvents(
      variables?: PublicEventsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<PublicEventsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PublicEventsQuery>(PublicEventsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'PublicEvents',
        'query'
      )
    },
    PublicSongs(
      variables?: PublicSongsQueryVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<PublicSongsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<PublicSongsQuery>(PublicSongsDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        'PublicSongs',
        'query'
      )
    },
    SubmitGigRequest(
      variables: SubmitGigRequestMutationVariables,
      requestHeaders?: Dom.RequestInit['headers']
    ): Promise<SubmitGigRequestMutation> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<SubmitGigRequestMutation>(
            SubmitGigRequestDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        'SubmitGigRequest',
        'mutation'
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
