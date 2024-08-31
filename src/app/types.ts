export interface Event {
  id: number;
  created_at: string;
  name: string;
  description: string;
  date: string;
  startTime: string;
  contactEmail: string;
  contactPhone: string;
  mainEventId: number | null;
  isActive: boolean;
  eventOrganizationId: number;
  venueId: number;
  endDate: string | null;
  categoryId: number | null;
  endTime: string | null;
  isFree: boolean;
  eventImage: string | null;
  event_categories: EventCategory;
  venues: EventVenueType;
  eventOrganizations: EventOrganizationsType;
}

export interface EventCategory {
  id: string;
  name: string;
  events: Event[];
}

export interface EventVenueType {
  name: string;
  zone_ticket_category: ZoneTicketCategoryType[];
}

export interface ZoneTicketCategoryType {
  name: string;
  price: string;
}

export interface EventLocationsType {
  id: string;
  name: string;
}

export interface EventOrganizationsType {
  id: string;
  name: string;
}
