import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { JwtPayloadWithRefreshToken } from '../../auth/types';

export const GetCurrentUser = createParamDecorator(
  (
    data: keyof JwtPayloadWithRefreshToken | undefined,
    context: ExecutionContext,
  ) => {
    const request = context.switchToHttp().getRequest();
    console.log(data);
    console.log(request.user);

    if (!data) return request.user;
    return request.user[data];
  },
);
