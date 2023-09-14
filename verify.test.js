 describe('verify', () => {
   it('should fail with the msg "verification failed"', () => {
     expect(() => verify()).toThrow('verification failed');
   });
 });
