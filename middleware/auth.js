import { extend } from 'lodash';
import passport from 'passport';
// import bcrypt from 'bcrypt';
// import { Strategy as LocalStrategy } from 'passport-local';

import { Strategy as JWTstrategy, ExtractJwt } from 'passport-jwt';
const { JWT_SECRET } = process.env;

console.log({ JWT_SECRET });

const JWTStrategy = new JWTstrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
}, (decryptedData, done) => {

  console.log({ decryptedData });
  console.log('I am in \"fromAuthHeaderWithScheme\"');
  done(null, { email: 'email', auth: true });

  // Users.aggregate([
  //   { $match: { email } },
  //   {
  //     $unwind: {
  //       path: '$permission',
  //       preserveNullAndEmptyArrays: true
  //     }
  //   },
  //   {
  //     $lookup: {
  //       from: 'grants',
  //       localField: 'permission.role',
  //       foreignField: 'role',
  //       as: 'roles'
  //     }
  //   },
  //   {
  //     $project: {
  //       columnsWanted: 1,
  //       email: 1,
  //       name: 1,
  //       admin: 1,
  //       status: 1,
  //       password: 1,
  //       payment: 1,
  //       referralCode: 1,
  //       noOfActiveProducts: 1,
  //       mws: 1,
  //       permission: 1,
  //       roles: {
  //         $filter: {
  //           input: '$roles',
  //           as: 'rol',
  //           cond: {
  //             $or: [
  //               { $not: ['$$rol.userId'] },
  //               {
  //                 $and: [
  //                   { $eq: ['$$rol.userId', '$permission.parentId'] },
  //                   { $in: ['$$rol.role', '$permission.role'] }
  //                 ]
  //               }
  //             ]
  //           }
  //         }
  //       },
  //       fbaInboundShippingCost: 1
  //     }
  //   }
  // ]).then(async (userToEdit) => {
  //   if (userToEdit && userToEdit.length) {
  //     const user = userToEdit[0];
  //     if (!user.admin) {
  //       if (user.status === 'Child User' && user.permission.parentId) {
  //         Users.findOne({
  //           _id: user.permission.parentId
  //         }).then((parentStatusObject) => {
  //           if (parentStatusObject.status !== 'Trial Expire') {
  //             user.personelId = user._id;
  //             user._id = user.permission.parentId;
  //             done(null, user);
  //           } else {
  //             return done({ message: 'Trial Expire: Please Contact your Admin User!' }, false);
  //           }
  //         });
  //       } else {
  //         done(null, user);
  //       }
  //     } else {
  //       done(null, user);
  //     }
  //   } else {
  //     done({ message: 'User not found !' }, false);
  //   }
  // }).catch(err => done(err));

});

passport.use('jwt', JWTStrategy);
