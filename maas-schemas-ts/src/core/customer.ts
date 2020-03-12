/*

undefined
MaaS customer schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Address_ from 'maas-schemas-ts/core/components/address';
import * as I18n_ from 'maas-schemas-ts/core/components/i18n';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';
import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId = 'http://maasglobal.com/core/customer.json';

// Customer
// The default export. More information at the top.
export type Customer = t.Branded<
  {
    identityId?: Units_.IdentityId;
    honorifics?: string;
    firstName?: Common_.PersonalName;
    lastName?: Common_.PersonalName;
    firstNameLocalized?: Common_.PersonalName;
    lastNameLocalized?: Common_.PersonalName;
    sex?: string;
    phone?: Common_.Phone;
    email?: Common_.Email;
    address?: Address_.Address;
    city?: Address_.City;
    state?: Address_.State;
    country?: Address_.Country;
    zipCode?: Address_.ZipCode;
    locale?: I18n_.Locale;
    appInstanceId?: Common_.AppInstanceId;
    opaqueId?: Common_.OpaqueId;
    clientId?: Common_.ClientId;
    dob?: boolean | Units_.IsoDate;
    ssid?: boolean | Common_.Ssid;
    balances?: ({
      WMP?: {
        currency?: 'WMP';
        amount?: number;
      } & {
        currency: Defined;
        amount: Defined;
      };
    } & Record<
      string,
      | ({
          currency?: 'WMP';
          amount?: number;
        } & {
          currency: Defined;
          amount: Defined;
        })
      | ({
          currency?: 'TOKEN';
          tokenId?: Fare_.TokenId;
          amount?: number | null;
        } & {
          currency: Defined;
          tokenId: Defined;
          amount: Defined;
        })
    >) & {
      WMP: Defined;
    };
    subscriberType?: string;
    authToken?: Common_.EncodedQueryParam;
  },
  CustomerBrand
>;
export const Customer = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    honorifics: t.string,
    firstName: Common_.PersonalName,
    lastName: Common_.PersonalName,
    firstNameLocalized: Common_.PersonalName,
    lastNameLocalized: Common_.PersonalName,
    sex: t.string,
    phone: Common_.Phone,
    email: Common_.Email,
    address: Address_.Address,
    city: Address_.City,
    state: Address_.State,
    country: Address_.Country,
    zipCode: Address_.ZipCode,
    locale: I18n_.Locale,
    appInstanceId: Common_.AppInstanceId,
    opaqueId: Common_.OpaqueId,
    clientId: Common_.ClientId,
    dob: t.union([t.boolean, Units_.IsoDate]),
    ssid: t.union([t.boolean, Common_.Ssid]),
    balances: t.intersection([
      t.intersection([
        t.partial({
          WMP: t.intersection([
            t.partial({
              currency: t.literal('WMP'),
              amount: t.number,
            }),
            t.type({
              currency: Defined,
              amount: Defined,
            }),
          ]),
        }),
        t.record(
          t.string,
          t.union([
            t.intersection([
              t.partial({
                currency: t.literal('WMP'),
                amount: t.number,
              }),
              t.type({
                currency: Defined,
                amount: Defined,
              }),
            ]),
            t.intersection([
              t.partial({
                currency: t.literal('TOKEN'),
                tokenId: Fare_.TokenId,
                amount: t.union([t.number, t.null]),
              }),
              t.type({
                currency: Defined,
                tokenId: Defined,
                amount: Defined,
              }),
            ]),
          ]),
        ),
      ]),
      t.type({
        WMP: Defined,
      }),
    ]),
    subscriberType: t.string,
    authToken: Common_.EncodedQueryParam,
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      honorifics?: string;
      firstName?: Common_.PersonalName;
      lastName?: Common_.PersonalName;
      firstNameLocalized?: Common_.PersonalName;
      lastNameLocalized?: Common_.PersonalName;
      sex?: string;
      phone?: Common_.Phone;
      email?: Common_.Email;
      address?: Address_.Address;
      city?: Address_.City;
      state?: Address_.State;
      country?: Address_.Country;
      zipCode?: Address_.ZipCode;
      locale?: I18n_.Locale;
      appInstanceId?: Common_.AppInstanceId;
      opaqueId?: Common_.OpaqueId;
      clientId?: Common_.ClientId;
      dob?: boolean | Units_.IsoDate;
      ssid?: boolean | Common_.Ssid;
      balances?: ({
        WMP?: {
          currency?: 'WMP';
          amount?: number;
        } & {
          currency: Defined;
          amount: Defined;
        };
      } & Record<
        string,
        | ({
            currency?: 'WMP';
            amount?: number;
          } & {
            currency: Defined;
            amount: Defined;
          })
        | ({
            currency?: 'TOKEN';
            tokenId?: Fare_.TokenId;
            amount?: number | null;
          } & {
            currency: Defined;
            tokenId: Defined;
            amount: Defined;
          })
      >) & {
        WMP: Defined;
      };
      subscriberType?: string;
      authToken?: Common_.EncodedQueryParam;
    },
    CustomerBrand
  > => true,
  'Customer',
);
export interface CustomerBrand {
  readonly Customer: unique symbol;
}
/** nonEmptyArray(Customer).decode(examplesCustomer) // => { _tag: 'Right', right: examplesCustomer } */
export const examplesCustomer: NonEmptyArray<Customer> = ([
  {
    identityId: 'eu-west-1:4828507e-683f-41bf-9d87-689808fbf958',
    id: 1234,
    favoriteLocations: [],
    phone: '+358407654321',
    email: 'bob.customer@example.com',
    honorifics: 'mr',
    sex: 'male',
    firstName: 'Bob',
    lastName: 'Customer',
    created: 1553687004207,
    modified: 1553688004207,
    paymentMethod: { type: 'unknown', valid: false },
    subscriptionInstance: {
      id: 10,
      name: 'Whim to Go',
      plan: { id: 'fi-whim-payg_v2' },
      addons: { '0': 'eur-whim-rollover-100_v1', '1': 'fi-whim-car' },
      region: {
        id: 'fi-helsinki',
        name: 'Helsinki Region',
        active: true,
        hidden: false,
        created: '2019-03-27T14:00:00.12345+00:00',
        zipCode: '00100',
        currency: 'EUR',
        location: { lat: 60.1699, lon: 24.9384 },
        geometryId: 2,
        countryCode: 'FI',
        countryDefault: true,
      },
      coupons: [],
      topUpId: 'fi-whim-top-up',
      wmpGrant: 0,
      pointCost: 0.01,
      description: 'Pay for each trip as you go',
    },
    balances: {
      WMP: { currency: 'WMP', amount: 1234, type: 'charge' },
      'cx-test-token_v2': {
        currency: 'TOKEN',
        tokenId: 'cx-test-token_v2',
        amount: 1,
        type: 'charge',
      },
    },
    regionId: 'fi-helsinki',
    region: {
      id: 'fi-helsinki',
      name: 'Helsinki Region',
      countryCode: 'FI',
      countryDefault: true,
      zipCode: '00100',
      location: { lat: 60.1699, lon: 24.9384 },
      active: true,
      hidden: false,
      geometryId: 2,
      created: 1553687004207,
      modified: 0,
      currency: 'EUR',
    },
  },
] as unknown) as NonEmptyArray<Customer>;

export default Customer;

// Success
